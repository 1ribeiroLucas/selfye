import { Request, Response } from "express";

import { getTasksService } from "../services/getTasksService";

export async function getTasksController(req: Request, res: Response): Promise<void> {
  console.log({ req });
  await getTasksService(res);
}
