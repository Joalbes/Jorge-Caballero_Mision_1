//referencias a vistas
const email = document.getElementById("email")
const password = document.getElementById("password")
const formulario = document.getElementById("formulario")
const errorDatos = document.getElementById("errorDatos")

//eventos
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    main();
})

//funcion para caragar el local storage
const main = async ()=> {
    const responses = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await responses.json();
    let data1 = JSON.stringify(data);
    localStorage.setItem('data', data1);
    let banderaCoincidencia = false;
    data.forEach(element => {        
        if ( email.value === element.email && password.value === element.username ) {
            location.href = './index2.html'
            banderaCoincidencia = true;
        }   
    });
    if (!banderaCoincidencia) {
        errorDatos.innerHTML = `
        <p class="my-[0.3rem] text-sm p-[0.5rem] text-red-600"> Error: Datos no corresponden, intente nuevamente</p>`
    }else{
        errorDatos.innerHTML=``
    }  
}


   