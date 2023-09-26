import express from 'express'
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '../Controllers/productController.js'
import { authorizeRoles,isAuthenticatedUser } from '../utils/authentication.js'

const router = express.Router()

router.route('/product/create').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route('/product/All').get(getAllProduct)
router.route('/product/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct).put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)

export default router