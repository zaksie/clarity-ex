"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const employees_1 = require("../controllers/employees");
exports.employeeRouter = (0, express_1.Router)();
console.log('initializing employeeRouter');
/** POST Methods */
/**
 * @openapi
 * '/api/v1/employees':
 *  post:
 *     tags:
 *     - Employees Controller
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - id
 *              - employmentStartDate
 *              - position
 *              - salary
 *            properties:
 *              name:
 *                type: string
 *              id:
 *                type: number
 *              employmentStartDate:
 *                type: Date
 *              position:
 *                type: number
 *              salary:
 *                type: number
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
exports.employeeRouter.post('/', employees_1.insertEmployee);
/** POST Methods */
/**
 * @openapi
 * '/api/v1/employees/{id}':
 *  post:
 *     tags:
 *     - Employees Controller
 *     summary: Update an employee
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the employee
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - id
 *              - employmentStartDate
 *              - position
 *              - salary
 *            properties:
 *              name:
 *                type: string
 *              id:
 *                type: number
 *              employmentStartDate:
 *                type: Date
 *              position:
 *                type: number
 *              salary:
 *                type: number
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
exports.employeeRouter.post('/:id', employees_1.updateEmployee);
/** GET Methods */
/**
 * @openapi
 * '/api/v1/employees/{id}':
 *  get:
 *     tags:
 *     - Employees Controller
 *     summary: Get an employee by Id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the employee
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
exports.employeeRouter.get('/:id', employees_1.readEmployee);
/** DELETE Methods */
/**
 * @openapi
 * '/api/v1/employees/{id}':
 *  delete:
 *     tags:
 *     - Employees Controller
 *     summary: Delete employee by Id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the employee
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
exports.employeeRouter.delete('/:id', employees_1.deleteEmployee);
//# sourceMappingURL=employees.route.js.map