import { Employee } from "../models/employee.model";
import {DB, DBResult} from "./db.interface";
import Nedb from 'nedb';

export class NeDB implements DB {
    db = new Nedb<Employee>()

    constructor() {
        console.log('initializing db...')
        this.db.ensureIndex({ fieldName: 'id', unique: true }, function (err) {
            console.error(err)
        });
    }
    read(idOrName: string | number): Promise<DBResult>{
        return new Promise(resolve => {
            const query = isNaN(+idOrName) ? {name: idOrName} : {id: idOrName}
            this.db.find(query, (err, res) => resolve({err, res}))
        })
    }
    update(id: number, employee: Employee): Promise<Error | null> {
        const _employee = {...employee, id} //making sure id is not changed
        return new Promise(resolve =>
            this.db.update({ id }, _employee, {}, err => resolve(err)))
    }
    delete(id: number): Promise<Error | null> {
        return new Promise(resolve =>
            this.db.remove({ id }, {}, err => resolve(err)))
    }
    insert(employee: Employee): Promise<Error | null> {
        return new Promise(resolve => {
            this.db.insert(employee, response => resolve(response))
        });
    }
}