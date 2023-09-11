const PersonServices = require("../services/PersonServices");

const o = new PersonServices();

const UsuarioController = {

    index: async (req, res) => {
        const usuarios = await o.getUsuarios();
        //const resultado = req?.query?.resultado
        res.render('index', { usuarios })
    },
    explore: (req, res) => {
        res.render('explore')
    },

    //
    createUser: async (req, res) => {

        //const user = (JSON.stringify(req.body)) // Parseamos el objeto a json para enviarlo al fetch -> Cannot convert object to primitive value -> usado en action
        const resultado = await o.crearUsuario(req.body);
        const json = await resultado.json();

        const message = json.message;
        console.log(json)

        res.send({ message })
    },

    //
    editUser: async () => {

    },

    deleteUser: async () => {

    }
    ,

    //
    getUser: async (req, res) => {
        const id = req.params.id;

        const usuario = await o.getUsuario(id);

        res.send(usuario)
    }

}

module.exports = UsuarioController;