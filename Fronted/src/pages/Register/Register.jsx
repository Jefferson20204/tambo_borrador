import React, { useCallback, useState } from "react";
import GoogleSignIn from "../../components/common/Buttons/GoogleSignIn";
import { Link } from "react-router-dom";
import { setLoading } from "../../store/features/common";
import { useDispatch } from "react-redux";
import { registerAPI } from "../../api/authentication";
import VerifyCode from "./VerifyCode";
import logo from "../../assets/img/logo-tambo2.png";
import Divider from "../../components/common/Divider/Divider";
import "../Form.css";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [apiError, setApiError] = useState({ message: "", code: null });
  const dispatch = useDispatch();
  const [enableVerify, setEnableVerify] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setApiError({ message: "", code: null });
      dispatch(
        setLoading({ loading: true, message: "Registrando usuario..." })
      );

      registerAPI(values)
        .then((res) => {
          if (res?.code === 200) {
            setEnableVerify(true);
          } else if (res?.message) {
            // Captura el mensaje de error de la API
            setApiError({
              message: res.message,
              code: res.code || 400,
            });
          }
        })
        .catch((err) => {
          // Maneja errores de conexión o respuestas inesperadas
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "Error en el registro. Inténtalo de nuevo.";
          setApiError({
            message: errorMessage,
            code: err.response?.status || 500,
          });
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [dispatch, values]
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
      <div className="form-image bg-register"></div>
      <div className="form-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <h1 className="form-title">Registro</h1>
        {apiError.message && (
          <div className="message error">{apiError.message}</div>
        )}
        {!enableVerify ? (
          <>
            {" "}
            <form onSubmit={onSubmit} className="form">
              <input
                type="text"
                name="firstName"
                value={values?.firstName}
                onChange={handleOnChange}
                placeholder="Nombre"
                className="input"
                required
              />
              <input
                type="text"
                name="lastName"
                value={values?.lastName}
                onChange={handleOnChange}
                placeholder="Apellido"
                className="input"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                value={values?.phoneNumber}
                onChange={handleOnChange}
                placeholder="Teléfono"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                value={values?.email}
                onChange={handleOnChange}
                placeholder="Correo Electrónico"
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
              />
              <div className="section-button">
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
                <Link to="/v1/login" className="btn btn-outline">
                  ¿Ya tienes cuenta? Inicia sesión
                </Link>
                <Divider text="o" />
                <GoogleSignIn />
              </div>
            </form>
          </>
        ) : (
          <VerifyCode email={values.email} />
        )}
      </div>
    </div>
  );
};

export default Register;
