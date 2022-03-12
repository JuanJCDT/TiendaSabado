export function pintarTienda() {

    let productosDB = [
        { foto: '../img/imgPagina/Aretes/Arete1.jpg', nombre: "Arete1", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete2.jpg', nombre: "Arete2", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete3.jpg', nombre: "Arete3", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete4.jpg', nombre: "Arete4", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete5.jpg', nombre: "Arete5", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete6.jpg', nombre: "Arete6", precio: 5000, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete7.jpg', nombre: "Arete7", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete8.jpg', nombre: "Arete8", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete9.jpg', nombre: "Arete9", precio: 4500, descripcion: "acero laminado" },
        { foto: '../img/imgPagina/Aretes/Arete10.jpg', nombre: "Arete10", precio: 4500, descripcion: "acero laminado" }
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
        tarjeta.classList.add("card", "h-100")

        //creo la foto
        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src = producto.foto

        //Nombre del producto
        let nombreP = document.createElement("h4")
        nombreP.classList.add("mx-auto")
        nombreP.textContent = producto.nombre

        //Precio del producto
        let precioP = document.createElement("p")
        precioP.classList.add("mx-auto")
        precioP.textContent = producto.precio

        //Descripcion del producto
        let descripcionP = document.createElement("p")
        descripcionP.classList.add("mx-auto")
        descripcionP.textContent = producto.descripcion

        //Creando un boton
        let boton = document.createElement("button")
        boton.setAttribute("type", "button")
        boton.classList.add("btn", "btn-info", "mx-4", "my-2")
        boton.textContent = "Ver producto"

        //paso 2: ordenar la estructura
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(nombreP)
        tarjeta.appendChild(precioP)
        tarjeta.appendChild(descripcionP)
        tarjeta.appendChild(boton)

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

}