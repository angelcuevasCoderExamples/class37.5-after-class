const {Router} = require('express');
const UsersControrller = require('../controllers/users.controller');
const router = Router();

router.get('/premium/:userId', UsersControrller.changeRole)


module.exports = {
    usersRouter: router
}; 