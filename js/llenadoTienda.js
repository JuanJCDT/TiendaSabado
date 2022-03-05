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

//creo una referencia al componente padre
//creo una variable para almacenar la base
//sobre la cual voy a pintar

let fila = document.getElementById("fila")

//Recorrer un arreglo con js
productosDB.forEach(function(producto) {
    //paso 1: crear estructura
    //creo columna
    let columna = document.createElement("div")
    columna.classList.add("col")

    //creo la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //creo la foto
    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src = producto.foto

    //paso 2: ordenar la estructura
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})

//Buscar/selecionar/esculcar
//productosDB.forEach(function(producto) {
//console.log("nacional es el mejor")
//})

//Escuchando click en el boton
//let boton = document.getElementById("boton")
//boton.addEventListener("click", cambiarFoto)

//function cambiarFoto() {
//let foto = document.getElementById("fotoPrueba")
//foto.src = "../img/imgPagina/Aretes/Arete11.jpg"
//}