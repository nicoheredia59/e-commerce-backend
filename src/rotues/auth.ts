import express, { Request, Response } from "express";
import { login, loginRequired, register, whoami } from "../controllers/auth";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "users",
  });
});

router.post("/register", register);

router.post("/login", login);

router.get("/whoami", loginRequired, whoami);

export { router as AuthRotuer };
