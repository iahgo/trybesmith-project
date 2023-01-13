import ProductsModel from '../models/products.model';
import { IOrder } from '../interfaces/ordersInterface';

const productModel = new ProductsModel();

const findAllOrders = async ():Promise<IOrder[]> => {
  const orders = await productModel.findAllOrders();
  return orders; 
};

export default {
  findAllOrders,
};