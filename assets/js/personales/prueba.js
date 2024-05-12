window.addEventListener('load',()=>{
    let mainTag=document.getElementsByTagName('main')[0];
    //console.log(mainTag);
    let btn1=document.getElementById('btn1');
    let btn3=document.querySelector("[class=btn]");
    console.log(btn3);
    let nuevoBoton=document.createElement("button");
    let nuevoInput=document.createElement('input');
    nuevoBoton.innerText="Nuevo Botón";
    nuevoBoton.addEventListener('click',()=>{
        console.log("nuevo");
    })
    btn1.addEventListener('click',()=>{
        console.log(5);
    });

    nuevoInput.addEventListener('blur',()=>{
        console.log("efecto blur");
    })

    mainTag.append(nuevoBoton);
    mainTag.append(nuevoInput);

    let valor="bajo";
    let opciones={
        "alto":5,
        "medio":3,
        "bajo":2
    }

    console.log(valor+":",opciones[valor]);

    switch(valor){
        case"alto":
            console.log (5);
            break;
        case"medio":
        console.log (3);
            break;
            case"bajo":
            console.log (2);
            break;
    }
})



