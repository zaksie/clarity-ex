const service = require("./service")
const {expect} = require('chai');
const randomEmployee = {
    id: Math.round(Math.random() * 1000000),
    name: 'John Smith',
}
describe('insert and read employee', () => {
    it('should insert new employee record', async () => {
        const result = await service.create(randomEmployee)
        expect(result).to.deep.equal(1);

        const readBackResult = await service.read(randomEmployee.id);
        expect(readBackResult).to.deep.equal({err: null, res: [randomEmployee]});
    })
});

describe('insert duplicate employee ', () => {
    it('should return errop', async () => {
        const newRecord = {...randomEmployee, name: 'Marry Smith'}
        const result = await service.create(newRecord)
        expect(result).to.not.deep.equal(1);

        const readBackResult = await service.read(randomEmployee.id);
        expect(readBackResult).to.deep.equal({err: null, res: [randomEmployee]});
    })
});

