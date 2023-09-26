import express from 'express'
import { getUserDetails, loginUser, logoutUser, registerUser } from '../Controllers/userController.js'

const router = express.Router()

router.route('/registerUser').post(registerUser)
router.route('/loginUser').post(loginUser)
router.route('/logoutUser').get(logoutUser)

export default router