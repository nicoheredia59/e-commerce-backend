import app from "./config/app";
import connection from "./config/db/connection";
import { loginRequired } from "./controllers/auth";
import { AuthRotuer } from "./rotues/auth";
import { CartRotuer } from "./rotues/cart";
import { HealthCheck } from "./rotues/health";
import { OrderRotuer } from "./rotues/order";
import { ProductRouter } from "./rotues/products";

connection();
//health check form ci-cd
app.use("/api/v1/health", HealthCheck);

//public route
app.use("/api/v1/products", ProductRouter);

//login required
app.use("/api/v1/cart", loginRequired, CartRotuer);
app.use("/api/v1/order", loginRequired, OrderRotuer);

//auth routes
app.use("/api/v1/auth", AuthRotuer);

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`server running on http://localhost:4000 🚀`);
});
