const nombre = document.getElementById("name")
const mail = document.getElementById("mail")
const mensaje = document.getElementById("mensaje")
const btn = document.getElementById("btn")
const mostrar = document.getElementById("parrafo")
// const mostrar = document.createElement('p')
function alClicar(e){
    e.preventDefault()
    
    const nombreValor = nombre.value;
    const mailValor = mail.value;
    const mensajeValor = mensaje.value;
    const btnValor = btn.value;

    console.log(nombreValor, mailValor, mensajeValor, btnValor)

    const usuario = {
        nombre: nombreValor,
        mail: mailValor,
        mensaje: mensajeValor,
    }
    localStorage.setItem('usuario', JSON.stringify(usuario))

    const user = JSON.parse(localStorage.getItem("usuario"))
    console.log("El usuario es: ", user)
mostrar.innerHTML = user.nombre + " " + user.mail + " " + user.mensaje
// document.body.appendChild(mostrar)
}
btn.addEventListener("click", alClicar)




