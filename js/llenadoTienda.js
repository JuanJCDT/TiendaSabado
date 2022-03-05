let productosDB = [
    { foto: '../img/imgPagina/Aretes/Arete1.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete2.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete3.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete4.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete5.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete6.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete7.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete8.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete9.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
    { foto: '../img/imgPagina/Aretes/Arete10.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" }
]

//Recorrer un arreglo con js
//Buscar/selecionar/esculcar
productosDB.forEach(function(producto) {
    console.log("nacional es el mejor")
})

//Escuchando click en el boton
let boton = document.getElementById("boton")
boton.addEventListener("click", cambiarFoto)

function cambiarFoto() {
    let foto = document.getElementById("fotoPrueba")
    foto.src = "../img/imgPagina/Aretes/Arete11.jpg"
}