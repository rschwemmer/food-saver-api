"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// setupMiddleware(app)
// Routes
app.get("/", (_req, res) => res.end(process.env.NODE_ENV));
app.listen(process.env.PORT, () => {
    console.info(`Server running on port http://localhost:${process.env.PORT}.`);
});
