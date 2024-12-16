"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeDB = void 0;
const nedb_1 = __importDefault(require("nedb"));
class NeDB {
    constructor() {
        this.db = new nedb_1.default();
        console.log('initializing db...');
        this.db.ensureIndex({ fieldName: 'id', unique: true }, function (err) {
            console.error(err);
        });
    }
    read(idOrName) {
        return new Promise(resolve => {
            const query = isNaN(+idOrName) ? { name: idOrName } : { id: idOrName };
            this.db.find(query, (err, res) => resolve({ err, res }));
        });
    }
    update(id, employee) {
        const _employee = Object.assign(Object.assign({}, employee), { id }); //making sure id is not changed
        return new Promise(resolve => this.db.update({ id }, _employee, {}, err => resolve(err)));
    }
    delete(id) {
        return new Promise(resolve => this.db.remove({ id }, {}, err => resolve(err)));
    }
    insert(employee) {
        return new Promise(resolve => {
            this.db.insert(employee, response => resolve(response));
        });
    }
}
exports.NeDB = NeDB;
//# sourceMappingURL=nedb.js.map