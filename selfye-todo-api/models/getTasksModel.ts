import { QueryConfig } from "pg";
import { todoApiPool } from "../connection/connection";
import { Response } from "express";

export function getTasksModel(res: Response): void {
  const getTasksQuery: QueryConfig<any> = {
    text: "SELECT * FROM tasks",
  };

  const tasks = todoApiPool.query(getTasksQuery, (err: any, queryRes: any) => {
    // if (err) res.status(400).json({ err });

    return queryRes.rows;
  });
  res.status(200).send({ tarefas: tasks })
}
