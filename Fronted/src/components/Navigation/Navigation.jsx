import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/img/logo-principal.png"; // Asegúrate de que el path sea correcto
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
            <img src={UserIcon} alt="User" className="nav-icon" />
            {!isLoggedIn && <span>Iniciar sesión</span>}
          </div>
        )}

        <div className="nav-cart" onClick={() => navigate("")}>
          <img src={CartIcon} alt="Cart" className="nav-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
