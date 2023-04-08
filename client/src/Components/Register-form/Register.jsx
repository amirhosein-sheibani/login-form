import React from "react";
import { Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../Input/Input";
import NavBar from "../Navigation/NavBar";

import http from "../../service/authService";
import token from "../../service/tokenService";
import { registerSchema } from "../../service/schema";

import "./register.scss";

export default function Register() {
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, actions) => {
    const data = await http.signUp(values);
    if (data && data.accessToken) {
      token.setJwtToLocalStorage(data.accessToken);
      localStorage.setItem("username", JSON.stringify(values.username));
      localStorage.setItem("username", JSON.stringify(values.username));
      toast.success("signup successfully", {
        className: "react-toastify",
      });
      actions.resetForm();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (data && data.errors) {
      toast.error(data.errors[0].msg, {
        className: "react-toastify",
      });
    }
  };

  return (
    <div className="Register-page">
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <section>
            <NavBar></NavBar>
            <div className="form-box">
              <div className="title">
                <h1>Register</h1>
              </div>
              <Form>
                <div className="input-box">
                  <Input
                    label="Username"
                    name="username"
                    type="text"
                    id="person-outline"
                  />
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
                  Register
                </button>
                <div className="Register">
                  <p>
                    you have a account?
                    <NavLink to="/login">signIn</NavLink>
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
