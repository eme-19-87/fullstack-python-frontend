window.addEventListener("load", ()=>{
    cargarCategorias();
});


function cargarCategorias(){
    const categorias=JSON.parse(localStorage.getItem("data")).categorias;
    const selectElement=document.getElementById("categoria");
    categorias.forEach((cat)=>{
        const option=document.createElement("option");
        option.innerHTML=cat;
        option.setAttribute("value",cat);
        selectElement.append(option);
    })
}

function insertarNuevoProducto(){
    const nombre=document.getElementById("nombreProd").value;
    const precio=document.getElementById("precioProd").value;
    const categoria=document.getElementById("categoria").value;
    const estado=document.getElementById("estado").value;
    const img=document.getElementById("imgProd");
    console.log(nombre);
    console.log(precio);
    console.log(categoria);
    console.log(estado);
    console.log(img);
}