import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <ShopApplicationWrapper />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
