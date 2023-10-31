const nombre =document.getElementById("name")
const email =document.getElementById("email")
const pass =document.getElementById("password")
const form=document.getElementById("form")
const parrafo=document.getElementById("warnings")

form.addEventListener("submit",e=>{
     e.preventDefault();
     let warnings=""
     let entrar=true
     let expresionEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     parrafo.innerHTML=""

     if(nombre.value.length <5)
     {
        warnings +="El nombre es muy corto <br>"
        entrar=false
     }
     if(!expresionEmail.test(email.value)){
        warnings +="Correo no es valido<br>"
        entrar=false
     }

     if(pass.value.length < 6){
        warnings +="La contraseña no es valida<br>"
        entrar=false
     }
     if(entrar == false){
        parrafo.innerHTML=warnings
     }
})