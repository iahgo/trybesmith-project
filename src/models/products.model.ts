import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

import { IProducts } from '../interfaces/productsInterface';
import { IUser } from '../interfaces/usersInterface';
import { IOrder } from '../interfaces/ordersInterface';

export default class ProductsModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async findAllProducts(): Promise<IProducts[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return result as IProducts[];
  }

  public async insertProduct(product: IProducts):Promise<IProducts> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async insertUser(user: IUser): 
  Promise<{ id:number, username: string, vocation:string, level:number }> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return { id: insertId, username, vocation, level };
  }

  public async findAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<RowDataPacket[] & IOrder[]>(
      `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
        FROM Trybesmith.orders as o
        INNER JOIN Trybesmith.products as p
        ON p.order_id = o.id
        GROUP BY o.id`,
    );
    return result as IOrder[];
  }
}
