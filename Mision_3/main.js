

//variables
const crearUsuario = document.querySelector("#crearusuario");
const contenidoTabla = document.querySelector("#contenidotabla");



//eventos
crearUsuario.addEventListener('click',()=>{location.href = 'index2.html'})


let objListaPersonas = JSON.parse(localStorage.getItem("listaPersonas"));
objListaPersonas.forEach(element => {
    contenidoTabla.innerHTML = `
    <tr>
    <td class="px-[2rem]">${element.area}</td>
    <td class="px-[2rem]">${element.nombre} ${element.apellidos}</td>
    <td class="px-[2rem]">${element.usuario}</td>
    <td class="px-[2rem]">${element.email}</td>
    <td class="px-[2rem]">${element.edad}</td>
  </tr>`
    
});
