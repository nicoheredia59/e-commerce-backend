import express from "express";
import cors from "cors";
import session from "express-session";

const app = express();

app.use(express.json({ limit: "1KB" }));

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);

app.use(
  session({
    name: "qid",
    secret: "asikdhiaubsdasdn",
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      secure: "auto",
    },
    saveUninitialized: false,
    resave: false,
  })
);

export default app;
