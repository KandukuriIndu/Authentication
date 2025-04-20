import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";
        if (!value.trim()) {
            error = `${name} is required`;
        }
        if (name === "email" && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) error = "Enter a valid email";
        }
        if (name === "password" && value.length < 6) {
            error = "Password must be at least 6 characters";
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors({ ...errors, [name]: validateField(name, value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) validationErrors[key] = error;
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the errors before submitting", { autoClose: 3000 });
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/register", formData);;
            toast.success(response.data.message, { autoClose: 2000 });
            setFormData({ name: "", email: "", password: "" });
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!", { autoClose: 3000 });
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form className="row col-md-4 mx-auto g-3 border rounded p-4" onSubmit={handleSubmit}>
                <h2 className="text-center">Register</h2>

                {["name", "email", "password"].map((field) => (
                    <div className="col-md-12" key={field}>
                        <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                            type={field === "password" ? "password" : "text"}
                            className="form-control"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                        />
                        {errors[field] && <small className="text-danger">{errors[field]}</small>}
                    </div>
                ))}

                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>
                </div>

                <div className="col-12 d-flex align-items-center gap-2 my-3">
                    <p className="m-0">Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
            </form>

            <ToastContainer position="top-right" />
        </div>
    );
};

export default Register;
