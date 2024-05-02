window.addEventListener("load", ()=>{
	insertarFontAwesome();
	insertarCssBoostrap();
	insertarScriptBoostrap();
	insertarEstilos();
	//alert("Entra");
});

window.addEventListener("close",()=>{
	localStorage.removeItem("data");
	sessionStorage.removeItem("data");
})

function insertarCssBoostrap(){
	
	let head=document.getElementsByTagName("head")[0];
	let bootstrapIcons = document.createElement("link");
	let linkBootstrap = document.createElement("link");
	bootstrapIcons.setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
	bootstrapIcons.setAttribute("rel","stylesheet");
	linkBootstrap.setAttribute("href","assets/css/bootstrap.min.css");
	linkBootstrap.setAttribute("rel","stylesheet");
	head.append(linkBootstrap);
	head.append(bootstrapIcons);
}


function insertarFontAwesome(){
	let head=document.getElementsByTagName("head")[0];
	let fontAwesome = document.createElement("link");
	fontAwesome.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css");
	fontAwesome.setAttribute("integrity","sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==");
	fontAwesome.setAttribute("crossorigin","anonymous");
	fontAwesome.setAttribute("rel","stylesheet");
	fontAwesome.setAttribute("referrerpolicy","no-referrer");
	head.append(fontAwesome);
}

function insertarScriptBoostrap(){
	let linkBootstrap = document.createElement("script");
	let body=document.getElementsByTagName("body")[0];
	linkBootstrap.setAttribute("src","assets/js/bootstrap.bundle.js");
	body.append(linkBootstrap);
}

function insertarEstilos(){
	
	let generalStyles = document.createElement("link");
	let formStylesCss= document.createElement("link");
	let cardStylesCss= document.createElement("link");
	let animatedCss=document.createElement("link");
	let footerStyle=document.createElement("link");
	let head=document.getElementsByTagName("head")[0];
	generalStyles.setAttribute("href","./assets/css/styles.css");
	generalStyles.setAttribute("rel","stylesheet");
	formStylesCss.setAttribute("href","./assets/css/responsiveFormStyle1.css");
	formStylesCss.setAttribute("rel","stylesheet");
	cardStylesCss.setAttribute("href","./assets/css/cardStyle.css");
	cardStylesCss.setAttribute("rel","stylesheet");
	footerStyle.setAttribute("href","./assets/css/responsiveFooter.css");
	footerStyle.setAttribute("rel","stylesheet");
	animatedCss.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
	animatedCss.setAttribute("rel","stylesheet");
	head.append(footerStyle);
	head.append(generalStyles);
	head.append(cardStylesCss);
	head.append(animatedCss);
}

function getProduct(category){
	const url='http://localhost/Mates/customCard.html?category='+category;
	window.location.href = url;
}

async function encodeFileAsBase64URL(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(file);
    });
};


/**
 * Uso de encodeFileAsBase64URL
 * encodeFileAsBase64URL(e.target.files[0]).then((encodeImg)=>{
		
	});
 */

	/**
	 * Convertir la Base64url en imagen
	 * 
	 * string baseStr64="/9j/4AAQSkZJRgABAQE...";
	 *	imgElem.setAttribute('src', "data:image/jpg;base64," + baseStr64);
	 *
	 *Otra forma de usarlo
	 *
	 *const base64URL = await encodeFileAsBase64URL(inputFile.files[0]);
	 */


	/**
	 * Código para crear una sesión con javascript
	 * Hace poco que he sabido que se pueden guardar sesiones en javascript, esto se consigue de manera similar a como funcionan las cookies. Para guardar sesiones en javascript hay que usar el objeto sessionStorage. En javascript las sesiones solo se almacenaran hasta que se cierre la ventana o pestaña del navegador.
     *Los métodos que se manejan son:
	 *setItem (key,value): El parámetro "key" especifica el nombre con el que se guardará el valor y el parámetro "value" indica el valor
	 *getItem (key): Recupera el valor almacenado en la clave "key". AL usar el método setItem
	 *removeItem (key): elimina el índice pasado por parámetro.
	 *
	 * Fuente: https://blogprog.gonzalolopez.es/articulos/sesiones-en-javascript.html
	 * 
	 *  sessionStorage.setItem("nombre", "Gonzalo");

     * var nombre = sessionStorage.getItem("nombre");

     *sessionStorage.removeItem("nombre");
	 */
	