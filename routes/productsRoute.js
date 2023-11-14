import express from'express';
import  {createProduct, getProduct, deleteProduct, getallProducts, getallProductsAdmin}  from '../controllers/productsController.js';
const router = new express.Router();


router.post('/add-product', createProduct);
router.get('/get-product/:id', getProduct);
router.get('/get-products', getallProducts);
router.get('/get-products-admin', getallProductsAdmin);
router.delete('/delete-product/:id', deleteProduct);

export default router;