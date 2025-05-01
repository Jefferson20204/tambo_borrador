import React, { useCallback, useState } from "react";
import GoogleSignIn from "../../components/common/Buttons/GoogleSignIn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/features/common";
import { loginAPI } from "../../api/authentication";
import { saveToken } from "../../utils/jwt-helper";
import logo from "../../assets/img/logo-tambo.png";
import Divider from "../../components/common/Divider/Divider";
import "../Form.css";

const Login = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const [apiError, setApiError] = useState({ message: "", code: null });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLoading({ loading: true, message: "Validando credenciales..." });
      loginAPI(values)
        .then((res) => {
          if (res?.token) {
            saveToken(res?.token);
            navigate("/");
          } else {
            setError("¡Algo salió mal!");
          }
        })
        .catch((err) => {
          // Maneja errores de conexión o respuestas inesperadas
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "Inicio de sesión fallida. Intente de nuevo.";
          setApiError({
            message: errorMessage,
            code: err.response?.status || 500,
          });
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, navigate, values]
  );

  const handleOnChange = useCallback((e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target?.value,
    }));
  }, []);

  return (
    <div className="form-page">
      <>
        <div className="form-image bg-login"></div>
        <div className="form-container">
          <img src={logo} alt="Logo" className="form-logo" />
          <h1 className="form-title">Inicio de sesión</h1>
          {apiError.message && (
            <div className="message error">{apiError.message}</div>
          )}
          <form onSubmit={onSubmit} className="form">
            <input
              type="email"
              name="userName"
              value={values?.userName}
              onChange={handleOnChange}
              placeholder="Correo electrónico"
              className="input"
              required
            />
            <input
              type="password"
              name="password"
              value={values?.password}
              onChange={handleOnChange}
              placeholder="Contraseña"
              className="input"
              required
              autoComplete="new-password"
            />

            <div className="section-button">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
              <Link to={"/v1/register"} className="btn btn-outline">
                ¿No tienes una cuenta? Registrate
              </Link>
              <Link to="/v1/forgot-password" className="link">
                ¿Olvidaste tu contraseña?
              </Link>

              <Divider text="o" />
              <GoogleSignIn />
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Login;
