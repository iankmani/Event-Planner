import React from "react";
import { Link, useNavigate } from "react-router-dom";  
import { useFormik } from "formik";
import * as Yup from "yup";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();  

  const handleSubmit = async (formvalues) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formvalues),
        credentials: "include"
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "Logged in Successfully") {
        alert("Logged in successfully");
        navigate("/explore");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password should be at least 4 characters")
      .max(8, "Password should be at most 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="Login_Page">
      <div className="signUp_title">
        <h1>Login</h1>
      </div>
      <div className="signUp_form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
