import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./scrollBar.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51PBf2DEOvmk3uVBJQCrg3s2qtqiveURXaLXH4SzpIZZRpPEFgV6Iph8PDZR12lTbMq53c8he6wQycULykbTRI4N3003mrRBNYV");
const root = ReactDOM as any;
root.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
      <ToastContainer
        bodyClassName={"text-gray-600 font-poppins"}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>
);
