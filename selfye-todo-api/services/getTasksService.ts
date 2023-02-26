import { Response } from "express";

import { getTasksModel } from '../models/getTasksModel';

export async function getTasksService(res: Response): Promise<void> {
  await getTasksModel(res);
}