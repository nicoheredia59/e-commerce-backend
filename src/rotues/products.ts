import express from "express";

const router = express.Router();

router.get("/", (_req: any, res: any) => res.send(`hello`));

export { router as ProductRouter };
