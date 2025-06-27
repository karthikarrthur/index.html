// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import Header from "./component temp/Header/Header";
import ProductLayout from "./component temp/ProductLayout/ProductLayout";
import Footer from "./component temp/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ProductLayout />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
