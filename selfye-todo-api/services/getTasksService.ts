import { Response } from "express";

import { getTasksModel } from '../models/getTasksModel';

export async function getTasksService(res: Response): Promise<void> {
  console.log('chegou no service');
  await getTasksModel(res);
}