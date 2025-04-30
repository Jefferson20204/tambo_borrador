import React, { useCallback } from "react";
import GoogleLogo from "../../../assets/img/Google.png";
import { API_BASE_URL } from "../../../api/constant";
import "./GoogleSignIn.css";

const GoogleSignIn = () => {
  const handleClick = useCallback(() => {
    window.location.href = API_BASE_URL + "/oauth2/authorization/google";
  }, []);

  return (
    <button onClick={handleClick} className="btn btn-google-signin">
      <img src={GoogleLogo} alt="google-icon" className="google-signin-logo" />
      <a className="google-signin-text">Continuar con Google</a>
    </button>
  );
};

export default GoogleSignIn;
