import express from 'express';
import{ additemcart, clearcart, deleteitemcart, updateitemcart, usercart } from '../controllers/cart.controllers.js';

const router = express.Router();

router.get('/user',usercart)
router.post('/additem',additemcart)
router.put('/update/:itemid',updateitemcart)
router.delete('/delete/:itemid',deleteitemcart)
router.delete('/clear',clearcart)

export default router;