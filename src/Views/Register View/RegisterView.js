import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../../Handlers/Errorhandler";
import { useFormContext } from "../../Context/RegisterViewContext/RegisterViewContext";
import "./RegisterView.css";
import axios from "axios";
import { useAuth } from "../../Context/Auth Context/AuthContext";
import { useNavigate } from "react-router-dom";
// Adding Toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("This is a Required Field!"),

  lastName: Yup.string()
    .min(2, "Too Short")
    .max(20, "Too Long")
    .required("This is a Required Field!"),

  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, "Invalid Email Format!")
    .email("Invalid Email!")
    .required("Email is Required!"),

  contact: Yup.string().matches(
    // /^\d{10}$/,
    // "Phone Number should consist of 10 digits"
  ),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .matches(/[a-zA-Z]/, "Password must contain alphabets!")
    .matches(/[0-9]/, "Password must contain at least one digit!")
    .matches(
      /[!@#$%^&*(),.?:{}|<>]/,
      "Password must contain a special character!"
    )
    .required("Password is Required"),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm Password must match new password!"
    )
    .required("Confirm Password is Required!"),
});

export default function SignUpValidation() {
  const { setFormData, showPassword, setShowPassword } = useFormContext();
  // Login function from AuthContext
  const { login } = useAuth();
  const navigate = useNavigate();

  // Using useState hook
  const [isSubmitted , setIsSubmitted] = useState(false);

  // Using useEffect hook
  useEffect(() => {
    if (isSubmitted) {
     const timer =  setTimeout(() => {
      navigate('/login');
      }, 3000);
      // Ensures that the timeout is cleared if the component unmounts before the timeout completes.
      return () => clearTimeout(timer);

    }
  }, [isSubmitted, navigate]);

  //Function to handle Contact input change with length validation
  const handleContactInputChange = (e, setFieldValue) => {
    const { value } = e.target;
    const maxLimit = 10;

    if (value.length <= maxLimit) {
      setFieldValue("contact", value);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {

    if(!values.firstName || !values.lastName || !values.email || !values.password) {
      console.error('All Fields are Required!');
      setSubmitting(false);
      return;
    };

    try {

      // Show a loading toast
      const loadingToastId = toast.loading('Processing your request...', {
        autoClose: true, 
        hideProgressBar: false, // Show the progress bar
        closeOnClick: true, // Show the close button
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // POST request to backend API
      const response = await axios.post('http://localhost:2004/signup', values);
      console.log(response.data); //Handles the response
      setFormData(values);
      login(values);

      // Show success message
      setTimeout(() => {
        toast.update(loadingToastId, {
          render: 'Account created successfully!, Redirecting in 3 seconds...',
          type: 'success',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsSubmitted(true); //Triggers the redirect
      }, 1500); //Delay before showing the success message

      // Log to confirm the timeout
      console.log('Redirecting in 3 seconds...');

      // setIsSubmitted to 'true'
      setIsSubmitted(true);

    } catch (error) {
      console.error('Error Submitting Form: ', error.response ? error.response.data : error.message);
      // Toast error
      if (error.response && error.response.status === 400) {
        toast.error('Email already in use!');
      } else {
        toast.error('Error occurred. Please try again!');
      }
    } finally {
      setSubmitting(false); //Set Submitting to false when done
    }
  };

  return (
    <div className="main-form-container">

      {/* ToastContainer for Toastify */}
      <ToastContainer />

      {/* Formik Schema */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        validateOnChange = {false}
        validateOnBlur = {false}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, setFieldValue }) => (
          <div className="customer-register-section">
            {/* First Name Field */}
            <Form id="create_customer" onSubmit={handleSubmit}>
              <div className="field-group">
                <div className="field">
                  <Field
                    type="text"
                    name="firstName"
                    id="RegisterForm-FirstName"
                    autoComplete="given-name"
                    placeholder=" "
                    // value={formData}
                  />
                  <label htmlFor="RegisterForm-FirstName">First name</label>
                </div>
                {errors.firstName && (
                  <ErrorMessage message={errors.firstName} />
                )}
              </div>

              {/* Last Name Field */}
              <div className="field-group">
                <div className="field">
                  <Field
                    type="text"
                    name="lastName"
                    id="RegisterForm-LastName"
                    autoComplete="given-name"
                    placeholder=" "
                    // value={formData}
                  />
                  <label htmlFor="RegisterForm-LastName">Last name</label>
                </div>
                {errors.lastName && (
                  <ErrorMessage message={errors.lastName} />
                )}
              </div>

              {/* Email Field */}
              <div className="field-group">
                <div className="field">
                  <Field
                    type="text"
                    name="email"
                    id="RegisterForm-Email"
                    autoComplete="email"
                    placeholder=" "
                    // value={formData}
                  />
                  <label htmlFor="RegisterForm-Email">Email</label>
                </div>
                {errors.email && (
                  <ErrorMessage message={errors.email} />
                )}
              </div>

              {/* Contact Field */}
              <div className="field-group">
                <div className="field">
                  <Field
                    type="text"
                    name="contact"
                    id="RegisterForm-Contact"
                    autoComplete="tel"
                    placeholder=" "
                    maxLength="10"
                    // value={formData}
                    onChange={(e) => handleContactInputChange(e, setFieldValue)}
                  />
                  <label htmlFor="RegisterForm-Contact">Contact</label>
                </div>
                {errors.contact && (
                  <ErrorMessage message={errors.contact} />
                )}
              </div>

              {/* Password Field */}
              <div className="field-group">
                <div className="field">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="RegisterForm-Password"
                    autoComplete="new-password"
                    placeholder=" "
                    // value={formData}
                  />
                  <label htmlFor="RegisterForm-Password">Password</label>

                  {/* Show Password Button */}
                  <button
                    type="button"
                    className="show-password-button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                  
                </div>
                {errors.password && (
                  <ErrorMessage message={errors.password} />
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="field-group">
                <div className="field">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="RegisterForm-ConfirmPassword"
                    autoComplete="new-password"
                    placeholder=" "
                    // value={formData}
                  />

                  <label htmlFor="RegisterForm-ConfirmPassword">Confirm Password</label>
                  <button
                    type="button"
                    className="show-password-button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>
                {errors.confirmPassword && (
                  <ErrorMessage message={errors.confirmPassword} />
                )}
              </div>

              <div className="signIn-btn">
                <button 
                type="submit"  
                className="signIn-inner-btn">
                  Sign Up
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}