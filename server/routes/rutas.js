const { Router } = require('express')
const router = Router();
const Conexion = require('../db/conexion')

/**
 * API Rest
 */

router.get('/get-user', (req, res) => {

})

/**
 * Creacion de usuario
 */
router.post('/crear-user', async (req, res) => {
    console.log(req.body)
    const { nombre, apellido, estado } = req.body
    console.log(nombre, apellido, estado)
    /* Conexion.query(`insert into usuario(id_usuario, nombre, apellido, estado_civil) values('${name}', '${lastname}','${estado}');`).
        then(res => {
            console.log(res.oid)
        }).catch(e => {
            console.error(e);
        })
     */
    res.json({ message: "usuario guardado" })
})

/**
 * Get users
 */
router.get('/get-users', async (req, response) => {
    Conexion.query('Select * from usuario;').then(res => {
        response.send(res.rows)
    }).catch(e => console.error(e))
})


/* router.get('/get-users', async (req, response) => {
    Conexion.query('Select * from usuario;').then(res => {
        response.render('table',{usuarios: res.rows})
    }).catch(e => console.error(e))
}) */


module.exports = router;