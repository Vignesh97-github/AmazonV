import express from 'express';
import { createUser, deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.controllers.js'

const router = express.Router();

router.post('/create',createUser)
router.get('/getall',getAllUser)
router.get('/get/:id',getUser)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser)

export default router;