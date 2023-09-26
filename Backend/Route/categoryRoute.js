import express from 'express'
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../Controllers/categoryController.js'
import { authorizeRoles,isAuthenticatedUser } from '../utils/authentication.js'

const router = express.Router()

router.route('/category/create').post(isAuthenticatedUser,authorizeRoles("admin"),createCategory)
router.route('/category/All').get(getAllCategory)
router.route('/category/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteCategory).put(isAuthenticatedUser,authorizeRoles("admin"),updateCategory)

export default router