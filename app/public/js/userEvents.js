const toastTrigger = document.getElementById('btnSaveUser')
const toastLiveExample = document.getElementById('liveToast')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')

const formUser = document.getElementById('user-form')
const mensajeToast = document.getElementById('mensaje')

document.addEventListener('DOMContentLoaded', async () => {
    Events();
})

const Events = () => {

    // Guardar y mostrar Toast
    if (toastTrigger) {
        //console.log('Lanzando toast!')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', (ev) => {
            ev.preventDefault();
            guardarUsuario();
            toastBootstrap.show()
            limpiarForm()
        })

    }

}


const guardarUsuario = () => {
    const datos = new FormData(formUser)
    //console.log(datos)
    const datosObjeto = {};
    for (const [clave, valor] of datos.entries()) {
        datosObjeto[clave] = valor;
    }
    const Jdatos = (JSON.stringify(datosObjeto))
    fetch('/createUser', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: (Jdatos)
    }).then(res => {
        return res.json() // return --> 
    }).
        then(message =>
            mensajeToast.innerText = message.message
        ).
        catch(err => console.log(err))
}

const editarUsuario = async (id) => {
    console.log(id)

    setearDatosForm(id)
    /* const datos = new FormData(formUser)
    const datosObjeto = {};
    for (const [clave, valor] of datos.entries()) {
        datosObjeto[clave] = valor;
    }
    const Jdatos = (JSON.stringify(datosObjeto))

    const res = await fetch(`/editUser/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: (Jdatos)
    })

    const message = await res.json() */
}

const eliminarUsuario = async (id) => {
    console.log(id)

    const res = await fetch(`/deleteUser/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: (Jdatos)
    })

    const message = await res.json()
}


const setearDatosForm = (id) => {
    fetch(`/getUser/${id}`).then(
        res => { return res.json() }
    ).then(
        data => {
            console.log(data)
            nombre.value = data[0].nombre
            apellido.value = data[0].apellido
        }
    )
}

const limpiarForm = () => {
    apellido.value = ''
    nombre.value = ''
}