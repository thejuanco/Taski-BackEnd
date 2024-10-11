//Define las rutas para el usuario y autenticacion
import { Router } from "express";
import { createUser, confirmToken, authenticateUser } from "../controller/userController.js";

const router = Router();

router.post('/createUser', createUser)
router.get('/confirm/:token', confirmToken)
router.post('/authenticate', authenticateUser)
// router.get('/forgotPassword/:token', forgotPassword)

export default router