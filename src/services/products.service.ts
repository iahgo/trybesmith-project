import ProductsModel from '../models/products.model';
import { IProducts } from '../interfaces/productsInterface';

const productModel = new ProductsModel();

const findAllProducts = async ():Promise<IProducts[]> => {
  const products = await productModel.findAllProducts();
  return products;
};

const insertProduct = async (product:IProducts): Promise<IProducts> => {
  const newProducts = await productModel.insertProduct(product);
  return newProducts;
};

export default {
  findAllProducts,
  insertProduct,
};