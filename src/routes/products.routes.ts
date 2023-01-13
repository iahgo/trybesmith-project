import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.findAllProducts);
// router.post('/', productsController.insertProduct);

export default router;
