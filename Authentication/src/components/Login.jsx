import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Enter a valid email address";
                }
                break;

            case "password":
                if (!value.trim()) {
                    error = "Password is required";
                } else if (value.length < 6) {
                    error = "Password must be at least 6 characters";
                }
                break;

            default:
                break;
        }

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("formDatafrdg",formData);
            
            try {
                const response = await axios.post("http://localhost:5000/api/login", formData)
                toast.success(response.data.message, { autoClose: 2000 });
                navigate("/index"); 
                // Store JWT token in localStorage or cookies
                localStorage.setItem("token", response.data.token);
                console.log("Login Data:", formData);
            } catch (error) {
                toast.error(error.response?.data?.message || "Login failed", { autoClose: 3000 });
            }
        } else {
            toast.error("Please fix the errors before logging in", { autoClose: 3000 });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form className="row col-md-4 mx-auto g-3 border rounded p-4" onSubmit={handleSubmit}>
                <h2 className="text-center">Login</h2>

                {[{ label: "Email", type: "email", name: "email" }, { label: "Password", type: "password", name: "password" }].map(({ label, type, name }) => (
                    <div className="col-md-12" key={name}>
                        <label className="form-label">{label}</label>
                        <input
                            type={type}
                            className="form-control"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                        />
                        {errors[name] && <small className="text-danger">{errors[name]}</small>}
                    </div>
                ))}

                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                        Sign in
                    </button>
                </div>

                <div className="col-12 d-flex align-items-center gap-2 my-3">
                    <p className="m-0">Don't have an account?</p>
                    <a href="/signin">Sign Up</a>
                </div>
            </form>

            {/* Toast Container */}
            <ToastContainer position="top-right" />
        </div>
    );
};

export default Login;
