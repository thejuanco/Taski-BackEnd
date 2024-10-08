//Define las rutas para el usuario y autenticacion
import { Router } from "express";
import { createUser } from "../controller/userController.js";

const router = Router();

router.post('/createUser', createUser)
router.post('/authenticate', authenticateUser)
router.get('/confirm/:token', confirmToken)
router.get('/forgotPassword/:token', forgotPassword)

export default router