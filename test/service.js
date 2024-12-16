const axios = require('axios')
const {env} = require("../env/env");


module.exports = {
    async create(employee){
        return axios.post(env.url, employee)
    },
    async read(id){
        return axios.get(env.url + '/' + id)
    },
    async update(id, employee){
        return axios.post(env.url + '/' + id, employee)
    },
    async delete(id) {
        return axios.delete(env.url + '/' + id)
    }
}