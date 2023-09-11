const { Router } = require('express')
const router = Router();
const {
    index,
    explore,
    createUser,
    editUser,
    deleteUser,
    getUser } = require('./usuarioController.js')

/* Vista Index */
router.get('/', index)

/* Vista Explore */
router.get('/explore', explore)

// Rutas de peticiones
router.post("/createUser", createUser)
router.put('/editUser/:id', editUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/getUser/:id', getUser)

module.exports = router;