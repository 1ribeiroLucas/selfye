import { Router } from 'express';

import { getTasksController } from '../controllers/getTasksController';
import { addTaskController } from '../controllers/addTaskController'; 

const todoRouter = Router();

todoRouter.get('/tasks', getTasksController);
// router.get('/tasks/:taskStatus', rgetTasksByStatusController);

todoRouter.post('/task', addTaskController);

export { todoRouter };