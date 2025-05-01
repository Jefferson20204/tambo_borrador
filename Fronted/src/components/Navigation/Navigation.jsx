import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/img/logo-tambo2.png"; // Asegúrate de que el path sea correcto
import UserIcon from "../../assets/img/user-icon.png"; // Icono de usuario
import CartIcon from "../../assets/img/cart-icon.png"; // Icono de carrito
import { isTokenValid } from "../../utils/jwt-helper";

const Navigation = ({ variant = "default" }) => {
  const navigate = useNavigate();
  const isLoggedIn = isTokenValid(); // Verifica si el token es válido

  return (
    <nav className="navigation">
      {/* Logo principal a la izquierda */}
      <div className="nav-left">
        <a href="/">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </a>
      </div>

      {/* Opciones a la derecha */}
      <div className="nav-right">
        {variant === "default" && (
          <div
            className="nav-user"
            onClick={() =>
              navigate(isLoggedIn ? "/account-details/" : "/v1/login")
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              className="nav-icon"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#000000"
                stroke-width="0.048"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1554 18.5659L18.087 18.4067C17.6996 17.3756 17.0535 16.6988 16.0488 16.2901C15.0618 15.8886 13.7385 15.75 12.0001 15.75C10.275 15.75 8.95912 15.8972 7.97442 16.3031C6.97373 16.7156 6.32558 17.3909 5.93304 18.4043L5.85652 18.5771C4.09876 16.9345 3 14.5956 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.5897 19.9062 16.9239 18.1554 18.5659ZM8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z"
                  fill="#b12a90"
                ></path>{" "}
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#b12a90"
                  stroke-width="2"
                ></path>{" "}
                <path
                  d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                  stroke="#b12a90"
                  stroke-width="2"
                ></path>{" "}
                <path
                  d="M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5"
                  stroke="#b12a90"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            {!isLoggedIn && <span>Iniciar sesión</span>}
          </div>
        )}

        <div className="nav-cart" onClick={() => navigate("")}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-icon"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="#b12a90"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
