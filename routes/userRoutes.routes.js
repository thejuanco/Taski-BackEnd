//Define las rutas para el usuario y autenticacion
import { Router } from "express";
import {
  createUser,
  confirmToken,
  authenticateUser,
  forgotPassword,
  resetPassword,
  updatePassword
} from "../controller/userController.js";

const router = Router();

router.post('/createUser', createUser)
router.get('/confirm/:token', confirmToken)
router.post('/authenticate', authenticateUser)
router.post('/forgotPassword', forgotPassword)
router.get('/resetPassword/:token', resetPassword)
router.post('/resetPassword/:token', updatePassword)

export default router