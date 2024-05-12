let indexPaletteColor=0;

window.addEventListener('load',()=>{
    /*let footer = document.getElementById("footer");
    let navbar=document.getElementsByClassName("optionBar")[0];
    alert(navbar);
    footer.style.setProperty('--color-fondo-pie','var(--first-grey-dark)');
    navbar.style.setProperty('--color-fondo-navbar','var(--second-palid-blue)');*/
    getPaletteColor();
});

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


function getPaletteColor(){
    const colors=[
        ['--first-grey','--first-cream','--first-grey-dark','--first-dark'],
        ['--second-palid-blue','--second-white','--second-orange','--second-brown'],
        ['--third-high-brown','--third-low-brown','--third-orange','--third-skin'],
        ['--forth-palid-skin','--forth-first-green','--forth-second-green','--forth-brown']
    ];

    let footer = document.getElementById("footer");
    let navbar=document.getElementsByClassName("optionBar")[0];
    let body=document.getElementsByTagName("body")[0];
    const selectedColor=shuffleColors(colors[random(0,3)]);
    footer.style.setProperty('--color-fondo-pie','var(' + selectedColor[0]+')');
    navbar.style.setProperty('--color-fondo-navbar','var(' + selectedColor[0]+')');
    navbar.style.setProperty('--color-letra-navbar','var(' + selectedColor[1]+')');
    footer.style.setProperty('--color-letra-pie','var(' + selectedColor[1]+')');
    body.style.setProperty('--color-fondo-general','var(' + selectedColor[3]+')');
    applyPaletteColorToCards(selectedColor[1],selectedColor[2]);

}

function shuffleColors(colors){
    let randomPosition=0;
    let aux='';
    let totalColors=4;
    for(let i=0;i<totalColors;i++){
        randomPosition=random(0,totalColors-1);
        aux=colors[i];
        colors[i]=colors[randomPosition];
        colors[randomPosition]=aux;

    }
    return colors;
}

function applyPaletteColorToCards(colorCardProduct,colorCardData){
    const cardProduct = document.getElementsByClassName("card-product");
    console.log(cardProduct);
    let cardData=document.getElementsByClassName("product-data");
    console.log(cardData);
    Array.from(cardData).forEach((card)=>{
        
        card.style.setProperty('--color-fondo-tarjeta-datos','var(' + colorCardData +')');
    });
    Array.from(cardProduct).forEach((card)=>{
        
        card.style.setProperty('--color-fondo-tarjeta','var(' + colorCardProduct +')');
    });
}

function applyPaletteColorToForm(bodyColor, characterColor,transCharColor){
    const formBody = document.getElementsByClassName("formBody");
    if(formBody!==null){
        Array.from(formBody).forEach((body)=>{
            body.style.setProperty('--color-fondo-tarjeta','var(' + colorCardProduct +')');
        })
    }
}





