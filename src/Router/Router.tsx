import { element } from "prop-types";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home />}
      />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/aboutus"} element={<AboutUs />} />
      <Route path={"/contactus"} element={<ContactUs />} />
    </Routes>
  );
};

export default Router;
