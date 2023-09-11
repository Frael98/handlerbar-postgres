const { Router } = require('express')
const router = Router();
const Conexion = require('../db/conexion')

/**
 * API Rest
 */

/**
 * Obtener user
 */
router.get('/get-user/:id', async (req, res) => {
    const id = req.params.id
    console.log(req.params.id)
    try {
        const data = await Conexion.query(`Select * from usuario where id_usuario=${id};`);
        const user = data.rows
        res.send(user)
    } catch (error) {
        console.log("error en base")
        res.status(404).send(error)
    }
})

/**
 * Creacion de usuario
 */
router.post('/crear-user', async (req, res) => {
    //console.log('imprimiendo datos')
    //console.log(req.body)
    const { nombre, apellido, estado } = req.body
    console.log(nombre, apellido, estado)
    //Conexion.
    Conexion.query(`insert into usuario(id_usuario, nombre, apellido, estado_civil) values('${nombre}', '${apellido}','${estado}');`).
        then(res => {
            console.log(res.oid)
        }).catch(e => {
            console.error(e);
        })

    return res.json({ message: "Usuario guardado correctamente" })
})

/**
 * Ontener usuarios
 */
router.get('/get-users', async (req, response) => {
    Conexion.query('Select * from usuario;')
        .then(res => {
            response.send(res.rows) // Enviamos los registros de la tabla
        }).catch(e => console.error(e))
})


/**
 * Editar Usuario user
 */
router.put('/edit-user/:id', async (req, res) => {
    const id = req.params.id
    const { nombre, apellido, estado } = req.body
    Conexion.query(`UPDATE USUARIO SET NOMBRE='${nombre}', APELLIDO='${apellido}', ESTADO_CIVIL='${estado}'
        WHERE ID_USUARIO = ${id}
    `).then(response => {
        res.send(response)
    }).catch(error => {
        console.log(error)
    })
})

/**
 * Delete User
 */
router.delete('/delete-user/:id', async (req, res) => {
    const id = req.params.id

    Conexion.query(`DELETE FROM USUARIO WHERE ID_USUARIO =  ${id}`)
        .then(response =>
            res.send(response.oid))
        .catch(error =>
            console.log(error))
})


module.exports = router;