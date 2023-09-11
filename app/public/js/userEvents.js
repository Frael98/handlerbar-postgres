const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')

const formUser = document.getElementById('user-form')
const mensajeToast = document.getElementById('mensaje')

document.addEventListener('DOMContentLoaded', async () => {
    Events();
})

const Events = () => {

    if (toastTrigger) {
        //console.log('Lanzando toast!')
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', async (ev) => {
            /* resetearForm(); */
            ev.preventDefault();
            guardar();
            toastBootstrap.show()
            resetearForm()
        })

    }


}


const resetearForm = () => {
    apellido.value = ''
    nombre.value = ''
}

const guardar = () => {
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
