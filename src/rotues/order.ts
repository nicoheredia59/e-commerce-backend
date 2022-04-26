import express from "express";
import { createOrder } from "../controllers/order";

const router = express.Router();

router.get("/", createOrder);

export { router as OrderRotuer };
