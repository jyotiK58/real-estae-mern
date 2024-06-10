import express from "express";
import {
  signin,
  signup,
  logout,
  google,
} from "../controllers/auth.controller.js";

const router = express.Router();
//register
router.post("/signup", signup);
//login
router.post("/signin", signin);
//logout
router.post("/logout", signin);
router.post("/google", google);

export default router;
