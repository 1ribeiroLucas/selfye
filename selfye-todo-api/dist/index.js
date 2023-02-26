"use strict";
// Reference for the initial setup
// https://blog.logrocket.com/how-to-set-up-node-typescript-express/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const todoApi_routes_1 = require("./routes/todoApi.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || '8000';
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(todoApi_routes_1.todoRouter);
app.listen(PORT, () => {
    console.log(`[server]: why are you running? PORT: ${PORT}`);
});
