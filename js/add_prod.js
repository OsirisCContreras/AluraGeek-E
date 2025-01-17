import {listaServices} from "../service/client-service.js"

const btnAgregarImagen = document.querySelector(".agregar__imagen");

let imagen = "";

btnAgregarImagen.addEventListener('change', cargar);

function cargar(ev) {
    var arch = new FileReader();
    arch.readAsDataURL(ev.target.files[0]);
    arch.addEventListener('load',leer);
}

function leer(ev) {
    document.getElementById('box__imagen').style.backgroundImage = "url('" + ev.target.result + "')";
    imagen = ev.target.result;
    document.querySelector(".archivo__faltante").parentElement.classList.remove("input__invalido");
}



const formAgregarProducto = document.querySelector(".formulario_contenedor");

formAgregarProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if(!imagen){
        
        document.querySelector(".archivo__faltante").parentElement.classList.add("input__invalido");

    }else{
        
        const nombre_prod = document.querySelector("[data-tipo=nombre_prod]").value;
        const precio_prod = document.querySelector("[data-tipo=precio_prod]").value;
        const categoria = document.querySelector("[data-tipo=categoria]").value;
        const descripcion_prod = document.querySelector("[data-tipo=descripcion_prod]").value;
        
        listaServices
        .crearCliente(imagen, categoria, nombre_prod, precio_prod, descripcion_prod)
        .then((respuesta) => {
            window.location.href ="productos.html"
        }).catch((error) => console.log(error));

    }
});
