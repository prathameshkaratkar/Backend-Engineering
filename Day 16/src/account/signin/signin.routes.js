import express from 'express';
import { signinUser } from './signin.controller.js';

const signinRouter = express.Router();

signinRouter.post('/',signinUser)


export default signinRouter