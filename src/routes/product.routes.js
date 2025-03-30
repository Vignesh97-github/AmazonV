import express from 'express';
import{ createproduct, deleteproduct, filterproduct, getallproduct, searchproduct, singleproduct } from '../controllers/product.controllers.js'

const router = express.Router()


router.get('/:id',singleproduct)
router.get('/search?name:""',searchproduct)
router.get('/getall',getallproduct)
router.post('/create',createproduct)
router.delete('/delete/:id',deleteproduct)
router.get('?category=""&price=',filterproduct)

export default router;