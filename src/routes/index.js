const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

router.use('/Users',userRouter)


module.exports = router;