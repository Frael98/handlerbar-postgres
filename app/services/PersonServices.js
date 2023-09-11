/**
 * Clase encargada de dirigir las peticiones a la API
 */
class PersonServices {

    constructor() {
        this.URI = `http://localhost:19000/api-rest`;
    }

    // con promesas
    crearUsuario(user) {
        /* console.log("usuario es ")
        console.log(typeof user) */
        const Juser = JSON.stringify(user)
        /* console.log(typeof Juser)
        console.log(typeof JSON.parse(Juser)) */

        return fetch(`${this.URI}/crear-user`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: (Juser), // -> se envia un json string
        }).then(
            res => {
                if (res.status == 200) {
                    return (res) // se retorna la respuesta - se parse en la llegada
                }
            }
        ).catch(
            err => {
                console.log(err)
            }
        )

    }

    // con async await
    async getUsuarios() {
        const res = await fetch(`${this.URI}/get-users`, {
            method: 'GET',
        });
        const respo = (await res.json())
        return respo;
    }
}

module.exports = PersonServices;