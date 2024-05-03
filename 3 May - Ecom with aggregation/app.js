import express from "express";
import { model, connect, Schema } from "mongoose";
import signinRouter from "./src/account/signin/singin.routes.js";
import profileRouter from "./src/account/profile/profile.routes.js";
import signupRouter from "./src/account/signup/singup.routes.js";
import orderRouter from "./src/orders/orders.routes.js";
const app = express();
const PORT = 6000;

// Connect with MongoDD using Mongoose
(async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/flipkart");
    console.log("MongoDB connection successful");
  } catch (err) {
    console.log("MongoDB connection failed");
  }
})();

app.use(express.json());
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);
app.use("/profile", profileRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});