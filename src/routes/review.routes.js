import express from 'express'
import { addreview, deletereview, updatereview } from '../controllers/review.controllers.js';

const router = express.Router();

router.post('/review',addreview)
router.put('/:reviewid',updatereview)
router.delete('/:reviewid',deletereview)

export default router;