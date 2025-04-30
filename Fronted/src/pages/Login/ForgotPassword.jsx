import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/features/common";
import { sendResetPasswordEmailAPI } from "../../api/authentication";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-tambo.png";
import "../Form.css";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [apiError, setApiError] = useState(null);
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch(setLoading({ loading: true, message: "Enviando email..." }));
      setMessage("");
      setApiError(null);

      try {
        const response = await sendResetPasswordEmailAPI(email);

        // Suponiendo que tu API devuelve un string como mensaje
        setMessage(response.message || "Correo de recuperación enviado.");
        disableButtonTemporarily();
      } catch (error) {
        const errorMsg =
          error?.message || "Error al enviar el correo de recuperación.";
        setApiError(errorMsg);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, email]
  );

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const disableButtonTemporarily = () => {
    setButtonDisabled(true);
    setSecondsLeft(60);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setButtonDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div className="form-page">
      <div className="form-image bg-login"></div>
      <div className="form-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <h1 className="form-title">Restablecer Contraseña</h1>
        {message && <div className="message success">{message}</div>}
        {apiError && <div className="message error">{apiError}</div>}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Correo electrónico"
            className="input"
            required
          />

          <div className="section-button">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={buttonDisabled}
            >
              {buttonDisabled
                ? `Vuelve a enviar dentro de ${formatTime(secondsLeft)}`
                : "Enviar correo de recuperación"}
            </button>
            <Link to="/v1/login" className="btn btn-outline">
              Volver al login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
