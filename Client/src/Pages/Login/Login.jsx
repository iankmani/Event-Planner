import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
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
    onSubmit: (formsubmission) => {
      console.log(formsubmission);
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="Signup_Page">
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
