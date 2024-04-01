import express from "express";
import { getUserDetails } from "./profile.controller";

const profileRouter = express.Router();

profileRouter.get('/',getUserDetails);

export default profileRouter