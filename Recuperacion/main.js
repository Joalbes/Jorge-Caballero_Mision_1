//referencias a vistas
const email = document.getElementsByClassName("email")
const password = document.getElementById("password")
const formulario = document.getElementById("formulario")

//eventos
formulario.addEventListener('submit',(e)=>{
    e.preventDefault;
    console.log(password.value);
    console.log(password.email);

})

//funcion para caragar el local storage
const main = async ()=> {
    const responses = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(responses);
    let data = await responses.json();
    data = JSON.stringify(data)
    localStorage.setItem('data', data)

}


main()    