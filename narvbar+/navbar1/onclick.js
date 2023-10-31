function myFunction(){
    var x=document.getElementById("miTopeNavbar");
    if(x.className === "navbar"){
        x.className +="responsive";
    }
    else{
        x.className ="navbar";
    }
}