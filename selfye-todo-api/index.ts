// Reference for the initial setup
// https://blog.logrocket.com/how-to-set-up-node-typescript-express/


import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { todoRouter } from './routes/todoApi.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || '8000';

app.use(express.json());
app.use(cors())
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`[server]: why are you running? PORT: ${PORT}`);
});
