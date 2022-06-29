import { Container, Grid } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import Navbar from "../organisms/Navbar/Navbar";

export default function ContactUs() {
  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      message: Yup.string().required("This field is required"),
    });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    message: "",
  };

  return (
    <>
      <Navbar site="Contact us" />
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
                name="firstName"
                type="text"
                className="form-control"
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "20px",
                  borderRadius: "10px",
                }}
                placeholder="First name: "
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
              <Field
                name="lastName"
                type="text"
                className="form-control"
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "20px",
                  borderRadius: "10px",
                }}
                placeholder="Last name: "
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="alert alert-danger"
              />
            </div>

            <div className="form-group">
            <Field
                name="textfield"
                className="form-control"
                as="textarea"
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "20px",
                  borderRadius: "10px",
                }}
                placeholder="Message: "
              />
              <ErrorMessage
                name="textfield"
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
