const express = require('express')
const { Router } = require('express')
const router = Router();
const { index, explore, createUser} = require('./usuarioController.js')

/* Vista Index */
router.get('/', index)

/* Vista Explore */
router.get('/explore', explore)

router.post("/createUser", createUser)

module.exports = router;