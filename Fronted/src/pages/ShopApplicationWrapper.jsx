import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Header/Navigation";
import Footer from "../components/Navigation/Footer/Footer";

import Spinner from "../components/common/Spinner/Spinner";

const ShopApplicationWrapper = () => {
  const isLoading = useSelector((state) => state.commonState.loading);
  const loadingMessage = useSelector(
    (state) => state.commonState.loadingMessage
  );
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
      {isLoading && <Spinner text={loadingMessage || "Cargando..."} />}
    </div>
  );
};

export default ShopApplicationWrapper;
