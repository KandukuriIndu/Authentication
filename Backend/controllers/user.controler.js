const userSchema = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Routes
exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // 👈 hash password

        const newUser = new userSchema({ name, email, password: hashedPassword }); // 👈 use schema not "User"
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.userLogin = async (req, res) => {
    try {
        console.log("Incoming request:", req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await userSchema.findOne({ email });

        if (!user) {
            console.log("User not found with email:", email);
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User found:", user);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || "defaultSecret",  // fallback if .env not loaded
            { expiresIn: "1h" }
        );

        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};
