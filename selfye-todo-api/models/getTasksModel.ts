import { todoApiPool } from "../connection/connection";

const { query } = todoApiPool;

export async function getTasksModel(res: any): Promise<void> {
  const getTasksQuery = "SELECT * FROM todo_api_db";

  const tasks = query(getTasksQuery, [], (err, queryRes) => {
    if (err) res.status(400).json({ err });

    return queryRes.rows;
  });
  res.status(200).json({ tasks });
}
