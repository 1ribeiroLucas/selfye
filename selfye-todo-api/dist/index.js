"use strict";
// Reference for the initial setup
// https://blog.logrocket.com/how-to-set-up-node-typescript-express/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || '8000';
app.get('/', (req, res) => {
    res.send(`tell me if you still care`);
    return req.statusCode;
});
app.listen(PORT, () => {
    console.log(`[server]: why are you running? PORT: ${PORT}`);
});
