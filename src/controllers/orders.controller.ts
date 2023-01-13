import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

const findAllOrders = async (req:Request, res:Response) => {
  const orders = await ordersServices.findAllOrders();
  res.status(200).json(orders);
};

export default {
  findAllOrders,
};