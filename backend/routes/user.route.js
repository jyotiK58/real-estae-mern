import express from "express";
import { test } from "../controllers/user.controller.js";
import { Router } from "express";

const router = express.Router();

router.get("/test", test);
export default router;
