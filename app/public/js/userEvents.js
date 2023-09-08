/* import { PersonServices } from "./services/PersonServices.js"; */

const form = document.getElementById('user-data');
/* const o = new PersonServices(); */

document.addEventListener('DOMContentLoaded',async () => {
    //console.log(await o.getUsuarios());
    Events();
})

const Events = () => {



    form.addEventListener('submit', (e) => {
        e.preventDefault();
        datos = new FormData(form)
        o.crearUsuario(datos)
    });
}
