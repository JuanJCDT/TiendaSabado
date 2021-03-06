export function AmpliarInformacion(event) {
    let producto = {}
    if (event.target.classList.contains("btn")) {
        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
        modalinfoproducto.show()

        producto = {
            foto: event.target.parentElement.querySelector("img").src,
            nombre: event.target.parentElement.querySelector("h4").textContent,
            precio: event.target.parentElement.querySelector("p").textContent,
            descipcion: event.target.parentElement.querySelector("p").textContent
        }

        console.log(producto)

        let foto = document.getElementById("fotoinfo")
        foto.src = producto.foto
        let nombre = document.getElementById("nombreinfo")
        nombre.textContent = producto.nombre
    }
}