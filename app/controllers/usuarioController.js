const PersonServices = require("../public/js/services/PersonServices");

const UsuarioController = {

    index: async (req, res) => {
        const o = new PersonServices();
        const usuarios = await o.getUsuarios();
        console.log(usuarios) // se imprime en consola del  servidor
        res.render('index', { usuarios })
    }
    ,
    explore: (req, res) => {
        res.render('explore')
    }
}

module.exports = UsuarioController;