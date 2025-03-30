import express from 'express';
import { cancelorder, getallorder, singleorder, updateorder, userorder } from '../controllers/order.controller.js';

const router = express.Router();

router.get('/user',userorder);
router.get('/:id',singleorder);
router.delete('/cancel/:id',cancelorder);
router.put('/update/:id',updateorder);
router.get('/getall',getallorder);

export default router;