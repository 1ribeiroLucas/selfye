import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || '8000';

app.get('/', (req: Request, res: Response) => {
  res.send(`tell me if you still care`);
  return req.statusCode;
});

app.listen(PORT, () => {
  console.log(`[server]: why are you running? PORT: ${PORT}`);
});
