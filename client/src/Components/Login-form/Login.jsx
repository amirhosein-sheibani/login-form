import React from "react";
import { Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../Input/Input";
import NavBar from "../Navigation/NavBar";

import http from "../../service/authService";
import token from "../../service/tokenService";
import { loginSchema } from "../../service/schema";

import "./login.scss";

export default function Login() {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    const data = await http.login(values);
    if (data && data.accessToken) {
      console.log("access", data);
      token.setJwtToLocalStorage(data);
      toast.success("Login successfully", {
        className: "react-toastify",
      });
      actions.resetForm();
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      toast.error(data, {
        className: "react-toastify",
      });
    }
  };

  return (
    <div className="Login-page">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <section>
            <NavBar></NavBar>
            <div className="form-box">
              <div className="title">
                <h1>Login</h1>
              </div>
              <Form>
                <div className="input-box">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    id="mail-outline"
                  />
                </div>
                <div className="input-box">
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    id="key-outline"
                  />
                </div>
                <button className="button" type="submit">
                  Log in
                </button>
                <div className="Register">
                  <p>
                    don't have a account?
                    <NavLink to="/register">Register</NavLink>
                  </p>
                </div>
              </Form>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}
