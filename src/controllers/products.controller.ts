import { Request, Response } from 'express';
import productsService from '../services/products.service';

const findAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.findAllProducts();
  res.status(200).json(products);
};

export default {
  findAllProducts,
};