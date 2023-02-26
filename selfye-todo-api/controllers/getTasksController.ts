import { Request, Response } from "express";

import { getTasksService } from "../services/getTasksService";

export async function getTasksController(req: Request, res: Response): Promise<void> {
  await getTasksService(res);
}
