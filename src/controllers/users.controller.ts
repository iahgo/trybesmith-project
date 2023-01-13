import { Request, Response } from 'express';
import usersService from '../services/users.service';

const insertUser = async (req: Request, res: Response) => {
  const user = req.body;  
  const newUser = await usersService.insertUser(user);
  res.status(201).json(newUser); 
};

export default {
  insertUser,
};