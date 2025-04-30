import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Spinner from "../components/common/Spinner/Spinner";
import { useSelector } from "react-redux";

const ShopApplicationWrapper = () => {
  const isLoading = useSelector((state) => state.commonState.loading);
  const loadingMessage = useSelector(
    (state) => state.commonState.loadingMessage
  );
  return (
    <div>
      <Navigation />
      <Outlet />
      {isLoading && <Spinner text={loadingMessage || "Cargando..."} />}
    </div>
  );
};

export default ShopApplicationWrapper;
