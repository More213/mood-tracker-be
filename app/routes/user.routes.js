var Router = require('express');
var router = new Router();
const userController = require('../controllers/user.controller');

router.post('/user', userController.createUser)

router.get('/users', userController.getAllUsers)

router.delete('/user:id', userController.deleteUser)

router.get('/user/:id', userController.getOneUser)

router.put('/user', userController.updateUser)

module.exports = router