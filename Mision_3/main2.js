//clase persona
class Persona{
    
    //Atributos
    nombre;
    apellidos;
    area;
    usuario;
    edad;
    direccion;
    email;

    //constructor
    constructor(nombre, apellidos, area, usuario, edad, direccion, email){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.area = area;
        this.usuario = usuario;
        this.edad = edad;
        this.direccion = direccion;
        this.email = email;
        }

    
}

//variables
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const area  = document.querySelector("#area");
const usuario  = document.querySelector("#usuario");
const edad  = document.querySelector("#edad");
const direccion = document.querySelector("#direccion");
const email  = document.querySelector("#email");
const btnEnviar = document.querySelector("#btnenviar");
const formulario = document.querySelector("#formulario");

//Listaslet listaPersonas = []


//************************************eventos************************************//
//bloquear formulario
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
})
//guardar datos de 
btnEnviar.addEventListener('click',()=>{
    //traer el obj JSOn que esta en el Local Storage y covertitir el objeto a lista y asignarlo a la lista de personas
   let listaPersonas = JSON.parse(localStorage.getItem('listaPersonas')) || [];   

    //creo objeto personas
    let persona = new Persona(nombres.value, apellidos.value, area.value, usuario.value, edad.value, direccion.value, email.value);
    //pusheo elobj persona a la lista de personas
    listaPersonas.push(persona);
    //transformo en JSON la lista de personas
    listaPersonas = JSON.stringify(listaPersonas);
    //guardo en el loca storage el obj JSON de la lista de personas
    localStorage.setItem("listaPersonas", listaPersonas);
    //volver a la pag principal.
    location.href = "index.html"; 
    
})


