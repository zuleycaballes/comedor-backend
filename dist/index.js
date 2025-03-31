"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.send('Up and running! ');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
