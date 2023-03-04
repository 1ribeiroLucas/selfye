import { QueryConfig } from "pg";
import { todoApiPool } from "../connection/connection";

export async function getTasksModel(res: any): Promise<void> {
  const getTasksQuery: QueryConfig<any> = {
    text: "select * from tasks",
  };

  const tasks = todoApiPool.query(getTasksQuery, (err: any, queryRes: any) => {
    // if (err) res.status(400).json({ err });
    console.log({queryRes, err});

    return queryRes;
  });
  res.status(200).json({ tasks });
}
