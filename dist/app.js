"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employees_route_1 = require("./routes/employees.route");
const app = (0, express_1.default)();
const port = 3000;
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_1 = require("./swagger");
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('OK');
});
app.use('/api/v1/employees', employees_route_1.employeeRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
(0, swagger_1.swaggerDocs)(app, port);
//# sourceMappingURL=app.js.map