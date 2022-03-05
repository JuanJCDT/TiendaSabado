// Comentario de linea
/* comentario de bloque */
// Variables
// variables siempre en minusculas
// Tipos de variables var tiene un ambito global (sobrescribe) y let tiene un ambito local (no se puede sobrescribir)
let nombre = 'Juan'
let estaturaUsuario = 1.70
let edad = '21'
let telefonoUsuario = '3225992043' // Datos que no operan
let esPaisa = true // False // Banderas

// Constante siempre con mayusculas sostenidas
const APELLIDO_USUARIO = 'David Torres'

if (true) {
    let nombre = 'james'
        //console.log(nombre)
}

// var nombreUsuario = 'Juan' estilos camelcase

// Salidad
// Concatenar
console.log('Buenas tardes ' + nombre + ' tu edad es ' + edad)
    // Concatenar 2
console.log(`Buenas tardes ${nombre} tu edad es ${edad}`)

// Utilizar el DOM
let etiquetaTitulo = document.getElementById("titulo")
etiquetaTitulo.textContent = "solo verde"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")


let etiquetaNav = document.getElementById("tituloNav")
etiquetaNav.textContent = "Tienda"