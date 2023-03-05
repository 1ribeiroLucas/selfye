import { Response } from "express";

import { getTasksModel } from '../models/getTasksModel';

export function getTasksService(res: Response): void {
  getTasksModel(res);
}