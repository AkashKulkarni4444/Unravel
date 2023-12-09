import express  from "express";
import { PaymentController } from "../Controllers/PaymentController.js";
const router = express.Router();

// const {registerController , loginController} = require('../controllers/AuthController');

router.post('/create-order' , PaymentController);


export default router;
