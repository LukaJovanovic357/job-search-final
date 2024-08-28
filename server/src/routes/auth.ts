import express from 'express'
import { login, register, updateUser } from '../controllers/auth.js'
import { authentication as authenticateUser } from '../middleware/authentication'
import { testUser } from '../middleware/index'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

export default router
