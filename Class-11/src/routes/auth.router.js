import express from "express";
import { createuser, login } from "../controller/auth.controller.js";

const authRoute = express.Router()

authRoute.post("/createuser",createuser)
authRoute.post("/login",login)

export default authRoute;