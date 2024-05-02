function iniciarSesion(){
    alert("Entra");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    if(email.value==="admin@admin.com" && password.value==="1234"){
        sessionStorage.setItem("data", JSON.stringify({
            rol:'admin',
            nombre:'Admin Prueba'
        }));
        window.location.href="adminView.html";
    }
}

function cerrarSesion(){
    sessionStorage.removeItem("data");
    window.location.href="index.html";
}

