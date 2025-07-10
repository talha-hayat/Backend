// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import USER from "../Model/user.model.js";
import bcrypt from "bcrypt"
import User from "../Model/user.model.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export const signup = async (req, res) => {
  const { profileImage, username, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 1);

    // Create new user
    const newUser = await USER.create({
      profileImage,
      username,
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "User created successfully",
      newUser
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error checking...",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Sign JWT
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
