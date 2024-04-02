const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const result = await User.findAll()
    return res.json(result)
});

const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.status(404).json({message: "User not found"})
    return res.json(result)
})

const destroy = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.sendStatus(404)
    await result.destroy()
    return res.sendStatus(204)
})

const update = catchError(async( req, res ) => {
    const { id } = req.params
    const result = await User.findByPk(id)

    if(!result) return res.sendStatus(404)
    const userUpdate = await result.update(req.body)

    return res.json(userUpdate)
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}