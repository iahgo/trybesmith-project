import ProductsModel from '../models/products.model';
import { IProducts } from '../interfaces/productsInterface';

const productModel = new ProductsModel();

const findAllProducts = async ():Promise<IProducts[]> => {
  const products = await productModel.findAllProducts();
  return products;
};

export default {
  findAllProducts,
};