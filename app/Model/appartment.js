const data = require('../../database/appartmentSample.json')


const list = () => {
    return data
}

const get = (id) => {
    return data[id]
}

const insert = (appartment) => {
    data.push(appartment)
    return data
}

const update = (appartment) => {
    let appart = data[appartment.id - 1]
    appart.adress = appartment.adress
    appart.city = appartment.city
    return appart
}

const remove =  (id) => {
    data.splice(id - 1, 1)
    return data
}

module.exports = {list, get, insert, update, remove}