import { QueryConfig, QueryResult } from 'pg';
import { todoApiPool } from '../connection/connection';
import { Response } from 'express';

export function addTaskModel(body: any, res: Response): void {
  // Temporary randomId, I'll do something better later
  const randomId = Number((Math.random() + 37 * 12).toFixed())
  const addTextQuery: QueryConfig<any> = {
    text: 'INSERT INTO tasks VALUES($1, $2, $3)',
    values: [randomId, body.taskStatus, body.taskContent]
  }

  const taskAdded = todoApiPool.query(addTextQuery, (err: any, queryRes: QueryResult) => {
    return queryRes.rows;
  });
  res.sendStatus(200).json({ taskAdded });
}