import { Request, Response } from "express";

import { getTasksService } from "../services/getTasksService";

export function getTasksController(req: Request, res: Response): void {
  getTasksService(res);
}
