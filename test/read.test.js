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

describe('read nonexistent employee', () => {
    it('should return []', async () => {
        const result = await service.read(195373498578931745)
        expect(result).to.deep.equal(1);

        const readBackResult = await service.read(randomEmployee.id);
        expect(readBackResult).to.deep.equal({err: null, res: []});
    })
});

