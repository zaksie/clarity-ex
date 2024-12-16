import {Employee} from "../models/employee.model";

export interface DBResult {
    err: Error | null
    res: Employee[]
}
export interface DB {
    insert(employee: Employee): Promise<Error | null>
    read(idOrName: string | number): Promise<DBResult>
    update(id: number, employee: Employee): Promise<Error | null>
    delete(id: number): Promise<Error | null>
}