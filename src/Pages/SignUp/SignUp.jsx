import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";

const SignUp = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("First Name is required")
      .min(2, "First Name should be at least 2 characters")
      .max(12, "First Name should be at most 12 characters"),
    lastname: Yup.string()
      .required("Last Name is required")
      .min(2, "Last Name should be at least 2 characters")
      .max(12, "Last Name should be at most 12 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password should be at least 4 characters")
      .max(8, "Password should be at most 20 characters"),
    phonenumber: Yup.string()
      .required("Phone Number is required")
      .min(10, "Phone Number should be at least 10 characters"),
    // .matches(/^[0-9]{10}$/, "Phone Number should be 10 digits"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phonenumber: "",
    },
    onSubmit: (formsubmission) => {
      console.log(formsubmission);
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="Signup_Page">
      <div className="signUp_title">
        <h1>Sign Up</h1>
      </div>
      <div className="signUp_form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="error">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="error">{formik.errors.lastname}</div>
              ) : null}
            </div>
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
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="text"
                name="phonenumber"
                id="phone"
                placeholder="Enter your phone number"
                value={formik.values.phonenumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phonenumber && formik.errors.phonenumber ? (
                <div className="error">{formik.errors.phonenumber}</div>
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

            <div className="SignUp_button">
              <button type="submit">sign up</button>
            </div>
            <p>
              Already have an account? <a href="">log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
