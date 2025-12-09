const express = require('express');
const{createUser, getAllUsers, editUser, deleteUser} = require('../controller/userController')
const router = express.Router();

router.post('/createuser', createUser);
router.get('/getuser', getAllUsers);
router.put('/edituser/:id', editUser)
router.delete('/deteteuser/:id', deleteUser)

module.exports = router