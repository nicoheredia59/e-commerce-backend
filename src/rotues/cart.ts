import express from "express";
import { getMyCartItems } from "../controllers/cart";

const router = express.Router();

router.get("/", getMyCartItems);

export { router as CartRotuer };
