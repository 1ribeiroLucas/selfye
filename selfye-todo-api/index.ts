// Reference for the initial setup
// https://blog.logrocket.com/how-to-set-up-node-typescript-express/


import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { todoRouter } from './routes/todoApi.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || '8000';

app.use(express.json());
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`[server]: why are you running? PORT: ${PORT}`);
});
