const service = require("./service")
const {expect} = require('chai');
const randomEmployee = {
    id: Math.round(Math.random() * 1000000),
    name: 'John Smith',
}
const result = await service.create(randomEmployee)

describe('delete employee', () => {
    it('should delete existing employee record', async () => {
        await service.create(randomEmployee.id)
        const result = await service.delete(randomEmployee.id)
        expect(result).to.deep.equal(1);
    })
});
describe('delete nonexistent employee', () => {
    it('should fail to delete and return error', async () => {
        const result = await service.delete(randomEmployee.id)
        expect(result).to.not.deep.equal(1);
    })
});

