import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../Context/Auth Context/AuthContext";
import { useNavigate } from "react-router-dom";
import './LoginView.css'
import axiosInstance from "../../Utils/Axios Instance/axiosInstance";

// Define validation schema using Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid Email!")
        .required("Email is Required!"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters!")
        .required("Password is Required!")
});

export default function LoginValidation() {
    const { login } = useAuth(); // Get login function from context
    const navigate = useNavigate(); 

    // Function to handle form submission
    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axiosInstance.post('/login', values);

            // Store token in local storage
            // localStorage.setItem('token', response.data.token);

            // Log the successful response with token
            console.log('Login Successfull token received: ' ,response.data.token); 

            // Call login function with response data and update auth context
            login(response.data.token); 

            // Redirect to a protected route
            navigate('/profile');

        } catch (error) {
            console.error('Error Submitting Form: ', error.message);
            // Check if error.response.data exists and is an object
            if (error.response && error.response.data && typeof error.response.data === 'object') {
                setErrors({ email: 'Invalid email or password!' });
            } else {
                setErrors({ email: 'An unexpected error occurred.' });
            }
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div className="main-form-container">
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, handleSubmit }) => (
                    <div className="login-section">
                        <Form id="login-form" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="field-group">
                                <div className="field">
                                    <Field
                                        type="text"
                                        name="email"
                                        id="LoginForm-Email"
                                        autoComplete="email"
                                        placeholder=""
                                    />
                                    <label htmlFor="LoginForm-Email">Email</label>
                                </div>
                                {touched.email && errors.email && (
                                    <div className="error-message">{errors.email}</div>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="field-group">
                                <div className="field">
                                    <Field
                                        type="password"
                                        name="password"
                                        id="LoginForm-Password"
                                        autoComplete="current-password"
                                        placeholder=""
                                    />
                                    <label htmlFor="LoginForm-Password">Password</label>
                                </div>
                                {touched.password && errors.password && (
                                    <div className="error-message">{errors.password}</div>
                                )}
                            </div>

                            <div className="login-btn">
                                <button
                                    type="submit"
                                    className="login-inner-btn"
                                >
                                    Login
                                </button>
                            </div>

                            <div className="create-account">
                                <button
                                    type="button"
                                    onClick={() => navigate('/signup')} 
                                    className="create-account-btn" 
                                >
                                    Create Account
                                </button>
                            </div>

                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
}
