import express from "express";
import { signup, login } from "../Controller/authController.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);

export default route;
