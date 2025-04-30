import React, { useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/features/common";
import { resetPasswordAPI } from "../../api/authentication";
import logo from "../../assets/img/logo-tambo.png";
import "../Form.css";

const ResetPassword = () => {
  const [params] = useSearchParams();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      dispatch(
        setLoading({ loading: true, message: "Cambiando contraseña..." })
      );
      resetPasswordAPI(token, password)
        .then(() => {
          setMessage("Contraseña restablecida correctamente.");
          setTimeout(() => navigate("/v1/login"), 2000);
        })
        .catch(() => {
          setError("Error al restablecer la contraseña.");
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    },
    [token, password, dispatch, navigate]
  );

  return (
    <div className="form-page">
      <div className="form-image bg-login"></div>
      <div className="form-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <h1 className="form-title">Restablecer Contraseña</h1>
        {error && <p className="message error">{error}</p>}
        {message ? (
          <p className="success">{message}</p>
        ) : (
          <form onSubmit={onSubmit} className="form">
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
            <div className="section-button">
              <button type="submit" className="btn btn-primary">
                Cambiar contraseña
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
