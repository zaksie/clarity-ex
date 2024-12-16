import {Router} from "express";
import {deleteEmployee, insertEmployee, readEmployee, updateEmployee} from "../controllers/employees";

export const employeeRouter = Router()
console.log('initializing employeeRouter')
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
employeeRouter.post('/', insertEmployee)
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
employeeRouter.post('/:id', updateEmployee)

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
employeeRouter.get('/:id', readEmployee)

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
employeeRouter.delete('/:id', deleteEmployee)