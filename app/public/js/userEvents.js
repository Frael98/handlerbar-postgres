const btnSaveUser = document.getElementById('btnSaveUser')
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')

const formUser = document.getElementById('user-form')
const mensajeToast = document.getElementById('mensaje')

var ID = 0;

document.addEventListener('DOMContentLoaded', async () => {
    Events();
})

const Events = () => {

    // Guardar y mostrar Toast
    if (btnSaveUser) {
        //console.log('Lanzando toast!')
        btnSaveUser.addEventListener('click', (ev) => {
            ev.preventDefault();
            GuardarEditar();
            toastBootstrap.show()
            limpiarForm()
        })

    }

}


const GuardarEditar = () => {
    const datos = new FormData(formUser)
    //console.log(datos)
    const datosObjeto = {};
    for (const [clave, valor] of datos.entries()) {
        datosObjeto[clave] = valor;
    }
    const Jdatos = (JSON.stringify(datosObjeto))

    if (ID == 0) {
        guardarUsuario(Jdatos)
    }
    else {
        editarUsuario(Jdatos)
    }
}

const guardarUsuario = (Jdatos) => {
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

const editarUsuario = async (Jdatos) => {
    const res = await fetch(`/editUser/${ID}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: (Jdatos)
    })

    const message = await res.json()
    mensajeToast.innerText = message.message
}

const eliminarUsuario = async (id) => {
    console.log(id)

    const res = await fetch(`/deleteUser/${id}`, {
        method: 'DELETE',
    })

    const message = await res.json()
    //console.log(message)
    mensajeToast.innerText = message.message
    toastBootstrap.show()

}


const setearDatosForm = (id) => {
    ID = id;
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
    ID = 0;
}