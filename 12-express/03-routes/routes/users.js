const express = require('express');

const usersRouter = express.Router();
const {
    getUsersHandler,
    postUsersHandler,
    getSingleUserHandler,
} = require('../controllers/users');

usersRouter.get('/', getUsersHandler);
usersRouter.post('/', postUsersHandler);
usersRouter.get('/:userId', getSingleUserHandler);

module.exports = usersRouter;
