const express = require('express');
const { getOne, create, update, destroy, getAll } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(create)

userRouter.route("/:id")
    .get(getOne)
    .put(update)
    .delete(destroy)

module.exports = userRouter;