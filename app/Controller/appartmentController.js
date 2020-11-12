const Appartment = require('../Model/appartment')


const index = (req, res) => {
    const data = Appartment.list()
    res.json(data)
}

const show = (req, res) => {
    const appartment = Appartment.get(req.params.id - 1)
    res.json(appartment)
}

const create = (req, res) => {
    const appartment = Appartment.insert(req.body)
    res.json(appartment)
}

const update = (req, res) => {
    const appartment = Appartment.update(req.body)
    res.json(appartment)
}

const remove = (req, res) => {
    const data = Appartment.remove(req.params.id - 1)
    res.json(data)
}

module.exports = {index, show, create, update, remove}