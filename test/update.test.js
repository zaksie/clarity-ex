const service = require("./service")
const {expect} = require('chai');
const randomEmployee = {
    id: Math.round(Math.random() * 1000000),
    name: 'John Smith',
}
describe('update employee', () => {
    it('should update existing employee record', async () => {
        await service.create(randomEmployee.id, randomEmployee)

        const updateRecord = {...randomEmployee, name: 'Marry Smith'}
        const result = await service.update(randomEmployee.id, updateRecord)
        expect(result).to.deep.equal(1);

        const readBackResult = await service.read(randomEmployee.id);
        expect(readBackResult).to.deep.equal({err: null, res: [updateRecord]});
    })
});


describe('update nonexistent employee', () => {
    it('should return error', async () => {
        const rid =  Math.round(Math.random() * 1000000)
        await service.delete(rid)
        await service.update(rid ,{} )

        const readBackResult = await service.read(rid);
        expect(readBackResult).to.deep.equal({err: null, res: []});
    })
});

