import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home />}
      />
      <Route path={"/sign-up"} element={<SignUp />} />
      <Route path={"/about-us"} element={<AboutUs />} />
      <Route path={"/contact-us"} element={<ContactUs />} />
      <Route path={"/sign-in"} element={<SignIn />} />
      <Route path={"/shop"} element={<Shop />} />
      <Route path={"/shop/:id"} element={<ProductDetail />} />
    </Routes>
  );
};

export default Router;
