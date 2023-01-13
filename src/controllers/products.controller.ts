import { Request, Response } from 'express';
import productsService from '../services/products.service';

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;  
  const newProduct = await productsService.insertProduct(product);
  res.status(201).json(newProduct); 
};

const findAllProducts = async (req: Request, res: Response) => {
  const products = await productsService.findAllProducts();
  res.status(200).json(products);
};

export default {
  findAllProducts,
  insertProduct,
};