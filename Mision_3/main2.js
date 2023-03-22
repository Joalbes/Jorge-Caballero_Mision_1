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

//Listas
listaPersonas = [];


//eventos
//bloquear formulario
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
})

btnEnviar.addEventListener('click',()=>{
    const persona = new Persona(nombres.value, apellidos.value, area.value, usuario.value, edad.value, direccion.value, email.value);
    listaPersonas.push(persona);   
    console.log(`Nombre: ${nombres.value}`);
    //console.log(`Lista Personas: ${listaPersonas}`);
    //localStorage.setItem('listaPersonas', listaPersonas);
})

