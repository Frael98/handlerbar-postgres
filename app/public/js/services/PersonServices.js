//export
class PersonServices {

    constructor() {
        this.URI = `http://localhost:19000/api-rest`;
    }

    async crearUsuario(user) {
        fetch(`${this.URI}/crear-user`, {
            method: 'POST',
            body: datos,
        }).then(
            res => {
                if (res.status == 200) {
                    console.log(res)
                }
            }
        ).catch(
            err => {
                console.log(err)
            }
        )

    }

    async getUsuarios(){

        const res = await fetch(`${this.URI}/get-users`,{
            method:'GET',
        });
        const respo = (await res.json())
        return respo;
    }
}

module.exports = PersonServices;