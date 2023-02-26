import { Router } from 'express';

import { getTasksController } from '../controllers/getTasksController';

const todoRouter = Router();

todoRouter.get('/tasks', getTasksController);
// router.get('/tasks/:taskStatus', rgetTasksByStatusController);

export { todoRouter };