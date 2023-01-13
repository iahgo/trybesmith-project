import jwt from 'jsonwebtoken';
import ProductsModel from '../models/products.model';
import { IUser } from '../interfaces/usersInterface';

const productModel = new ProductsModel();

const insertUser = async (user: IUser): Promise<{ token: string }> => {
  const newUser = await productModel.insertUser(user);
  const { id, username, vocation, level } = newUser;
  const userCreated = { id, username, vocation, level };
  const token = jwt.sign(
    userCreated, 
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  return { token };
};

export default {
  insertUser,
};