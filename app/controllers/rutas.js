const { Router } = require('express')
const router = Router();
const { index, explore } = require('./usuarioController')

/* Vista Index */
router.get('/', index)

/* Vista Explore */
router.get('/explore', explore)

module.exports = router;