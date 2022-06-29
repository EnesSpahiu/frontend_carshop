import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import Navbar from "../organisms/Navbar/Navbar";

export default function LoginPage() {
  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string().email().required("This field is required"),
      password: Yup.string().required("This field is required"),
    });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <Navbar site="Login"/>
      <Container
        style={{ justifyContent: "center", display: "flex", paddingTop: "10%" }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {
            /* TODO: LOGIN METHOD*/
          }}
        >
          <Form style={{ backgroundColor: "turquoise" }}>
            <div className="form-group">
              <Field
                name="email"
                type="text"
                className="form-control"
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "20px",
                  borderRadius: "10px",
                }}
                placeholder="E-Mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <Field
                name="password"
                type="password"
                className="form-control"
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "20px",
                  borderRadius: "10px",
                }}
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{
                  width: "100px",
                  height: "30px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                }}
              >
                <span className="spinner-border spinner-border-sm"></span>
                <span>Login</span>
              </button>
            </div>
            <div className="form-group">
              <div className="alert alert-danger" role="alert"></div>
            </div>
          </Form>
        </Formik>
      </Container>
    </>
  );
}
