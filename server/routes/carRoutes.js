import express from "express";
import { getCars, createCar, getCarById } from "../controllers/carController.js";

const router = express.Router();

router.get("/", getCars);
router.post("/", createCar);
router.get("/:id", getCarById);

export default router;