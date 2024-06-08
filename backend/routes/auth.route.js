import express from "express";
import { signin, signup, logout } from "../controllers/auth.controller.js";

const router = express.Router();
//register
router.post("/signup", signup);
//login
router.post("/signin", signin);
//logout
router.post("/logout", signin);

export default router;
