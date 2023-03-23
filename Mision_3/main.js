

//variables
const crearUsuario = document.querySelector("#crearusuario");
const contenidoTabla = document.querySelector("#contenidotabla");
const buscarPorNombre = document.querySelector("#buscarPorNombre");

let contadorCoincidencias = 0;
let posiciones = [];



//eventos
crearUsuario.addEventListener('click', () => { location.href = 'index2.html' })
buscarPorNombre.addEventListener('keyup', filtrar)

//Logica
crearTabla();


//funciones

function limpiarTabla() {
  contenidoTabla.innerHTML = ''
}

function filtrar(e) {
  if (e.keyCode === 'Enter') {
    //Se obtiene la lista de personas
    let nombreABuscar = buscarPorNombre.value;
    let objListaPersonas = JSON.parse(localStorage.getItem("listaPersonas"));    
    //se crea lista que contiene los indices de coincidencias
    objListaPersonas.forEach(element => {
    contadorCoincidencias++;
    if (element.nombre = nombreABuscar) {
      posiciones.push(contadorCoincidencias);
       }
    }); 
    //Imprimo en la row de la table el elemento coincidente
    if (posiciones.length > 0) {
      posiciones.forEach(element => {
      contenidoTabla.innerHTML +=`
                                  <tr>
                                    <td class="px-[3rem]">${objListaPersonas[element].area}</td>
                                    <td class="px-[3rem]">${objListaPersonas[element].nombre} ${objListaPersonas[element].apellidos}</td>
                                    <td class="px-[3rem]">${objListaPersonas[element].usuario}</td>
                                    <td class="px-[3rem]">${objListaPersonas[element].email}</td>
                                    <td class="px-[3rem]">${objListaPersonas[element].edad}</td>
                                  </tr>`
      });

    }

  }

}


function crearTabla() {
  let objListaPersonas = JSON.parse(localStorage.getItem("listaPersonas"));
  objListaPersonas.forEach(element => {
    contenidoTabla.innerHTML +=
      `<tr>
      <td class="px-[3rem]">${element.area}</td>
      <td class="px-[3rem]">${element.nombre} ${element.apellidos}</td>
      <td class="px-[3rem]">${element.usuario}</td>
      <td class="px-[3rem]">${element.email}</td>
      <td class="px-[3rem]">${element.edad}</td>
    </tr>`
  });
}

