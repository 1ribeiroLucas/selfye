import { Response } from "express";
import { addTaskModel } from "../models/addTasksModel";

export function addTaskService(body: any, res: Response): void {
  addTaskModel(body, res);
};
