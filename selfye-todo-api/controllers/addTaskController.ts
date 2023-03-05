import { Request, Response } from "express";
import { addTaskService } from "../services/addTaskService";

export function addTaskController(
  req: Request,
  res: Response
): void {
  addTaskService(req.body, res);
}
