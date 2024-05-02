
window.addEventListener("load",()=>{
    const form=document.querySelector("[id=form]");
    form.addEventListener("submit",(e)=>{
        let error="";
        e.preventDefault();
        const name=document.querySelector("[name=name]");
        const lastName=document.querySelector("[name=lastName]");
        const email=document.querySelector("[name=email]");
        const telephone=document.querySelector("[name=telephone]");
        const password=document.querySelector("[name=password]");
        const repeatPassword=document.querySelector("[name=password2]");

        error=controlName(name);
        error!==""?controlError('name-error','iconErrorName',name):removeErrors('name-error','iconErrorName');
        error=controlName(name)!==""?controlError('lastName-error','iconErrorName',lastName):removeErrors('lastName-error','iconErrorLastName');
        error!==""?controlError('email-error','iconErrorName',email):error=controlTelephone(telephone);
        error!==""?controlError('phone-error','iconErrorName',telephone):error=controlPassword(password);
        error!==""?controlError('password-error','iconErrorName',password):error=controlPassword(password);
        error!==""?controlError('password2-error','iconErrorName',password2):error="";
        if(error==="") alert("No hay Errores");
    
     })
    applyBlurEffect();
})

//#################################################################
// Inicio de la aplicación del eventListener para el blur
//de los distintos campos del formulario
//#################################################################
function applyBlurEffect(){
    const name=document.querySelector("[name=name]");
    const lastName=document.querySelector("[name=lastName]");
    const email=document.querySelector("[name=email]");
    const telephone=document.querySelector("[name=telephone]");
    const password=document.querySelector("[name=password]");
    const repeatPassword=document.querySelector("[name=password2]");
    

    name.addEventListener("keyup",(e)=>{controlError('name-error','iconErrorName',e.target);});
    name.addEventListener("blur",(e)=>{controlError('name-error','iconErrorName',e.target);});

    lastName.addEventListener("keyup",(e)=>{controlError('lastName-error','iconErrorLastName',e.target);});
    lastName.addEventListener("blur",(e)=>{controlError('lastName-error','iconErrorLastName',e.target);});

    email.addEventListener("keyup",(e)=>{controlError('email-error','iconErrorEmail',e.target);});
    email.addEventListener("blur",(e)=>{controlError('email-error','iconErrorEmail',e.target);});
    
    telephone.addEventListener("keyup",(e)=>{controlError('phone-error','iconErrorPhone',e.target);});
    telephone.addEventListener("blur",(e)=>{controlError('phone-error','iconErrorPhone',e.target);});

    password.addEventListener("keyup",(e)=>{controlError('password-error','iconErrorPhone',e.target);});
    password.addEventListener("blur",(e)=>{controlError('password-error','iconErrorPhone',e.target);});

    repeatPassword.addEventListener("keyup",(e)=>{controlError('password2-error','iconErrorPhone',e.target);});
    repeatPassword.addEventListener("blur",(e)=>{controlError('password2-error','iconErrorPhone',e.target);});
    
    
   
}

//#################################################################
//Fin de los addListener para el blur
//#################################################################

//#################################################################
//Inicio de los controles para los campos
//#################################################################


/**
 * 
 * @param {HTMLInputElement} nameInput El input que registrará el nombre del usuario
 * @returns {String} retornará un string que será vacío en caso de que no haya errores
 */
function controlName(nameInput){
    $errorMessage="";
    if(nameInput.value.length===0) $errorMessage="Coloque un nombre por favor";
    if($errorMessage==="") $errorMessage=onlyLetters(nameInput);
    if(nameInput.value.length<3 && $errorMessage==="") $errorMessage="El nombre debe tener mínimo 3 caracteres";
    

    return $errorMessage.trim();

}

/**
 * 
 * @param {HTMLInputElement} lastNameInput El input que registra el apellido del usuario
 * @returns {String} Retornará un string que será vacío en caso de error
 */
function controlLastName(lastNameInput){

    errorMessage="";
    if(lastNameInput.value.length===0) errorMessage="No deje el apellido en blanco";
    if(lastNameInput.value.length<=3 && errorMessage==="") errorMessage="El apellido debe tener mínimo 3 caracteres";

    return errorMessage.trim();
}

function controlEmail(emailInput){
    const emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const errorMessage=emailRegex.test(emailInput.value)?"":"Email Inválido";
    return errorMessage;
}

function controlTelephone(phoneInput){
    return onlyIntegers(phoneInput);
}

function controlPassword(passwordInput){
    const passRegex=/^.{8,64}$/;
    const errorMessage=passRegex.test(passwordInput.value)?"":"La contraseña debe contener un mínimo de 8 caracteres";
    return errorMessage;
}

function controlRepeatPassword(repeatInput){
    const password=document.querySelector("[name=password]");
    const errorMessage=password.value!==repeatInput.value?"Las constraseñas no coinciden":"";
    return errorMessage;
}

function onlyLetters(dataInput){
    const onlyLetterRegex=/^[A-ZÁÉÍÓÚÑ]+$/i;
    const errorMessage=onlyLetterRegex.test(dataInput.value)?"":"El campo sólo debe contener letras";
    return errorMessage;
}

function onlyIntegers(dataInput){
    const onlyIntegersRegex=/^\d{8,10}$/;
    const errorMessage=onlyIntegersRegex.test(dataInput.value)?"":"El campo sólo debe contener de 8 a 10 números";
    return errorMessage;
}

//#################################################################
//Fin de los controles para los campos
//#################################################################


function controlError(tagName,iconName,htmlElement){
    let error="";
    switch(tagName){
        case 'name-error':
            error=controlName(htmlElement);
            break;
        case 'lastName-error':
            error=controlLastName(htmlElement);
            break;
        case 'email-error':
            error=controlEmail(htmlElement);
            break;
        case 'phone-error':
            error=controlTelephone(htmlElement);
            break;
        case 'password-error':
            error=controlPassword(htmlElement);
            break;
        case 'password2-error':
            error=controlRepeatPassword(htmlElement);
            break;
        
    }
    
    if(error!==""){
        
        placerSpanError(htmlElement,error,tagName,iconName)
    }else{
        removeErrors(tagName,iconName);
    
    }
     applyAnimation(tagName,"animate__flash");
}


/**
 * 
 * @param {HTMLInputElement} htmlElement el elemento input al que se le agregará el efecto
 * @param {String} message El mensaje de error que se mostrará
 * @param {String} nameSpan El nombre del span de error al que se le aplicará el efecto
 */
function placerSpanError(htmlElement,message,nameSpan,iconName){
    /*const spanMessage=document.createElement("span");
    spanMessage.innerHTML=message;
    htmlElement.after(spanMessage);*/
    let errorElement=document.createElement("small");
    let iconError=document.createElement("i")
    //Segunda forma
    //Parámetros de insertAdjacentHTML
    //beforeend, afterbegin, beforebegin,afterend
    removeErrors(nameSpan,iconName);
    errorElement.classList.add("form__input-error");
    errorElement.classList.add(`${nameSpan}`);
    errorElement.setAttribute('name',nameSpan);
    iconError.classList.add('form__validation-state');
    iconError.classList.add('bi');
    iconError.classList.add('bi-x-octagon');
    iconError.setAttribute('name',iconName);
    errorElement.innerHTML=message;
    htmlElement.before(iconError);
    htmlElement.after(errorElement);
}

/**
 * 
 * @param {String} spanName El nombre de la etiqueta que tiene el mensaje de error
 * @param {String} iconName El nombre del ícono que muestra el mensaje de error
 */
function removeErrors(spanName,iconName){
    const spanElement=document.querySelector(`[name=${spanName}]`);
    const iconElement= document.querySelector(`[name=${iconName}]`);
    //const iconElement=document.querySelector(`[name=${iconName}]`);
    if (spanElement!==null && iconElement!==null){
        spanElement.remove();
        iconElement.remove();
    } 
}

/**
 * 
 * @param {String} nameSpan El nombre de la etiqueta que muestra el error
 * @param {String} animation El nombre de la animación que se colocará a la etiqueta
 */
function applyAnimation(nameSpan,animation){
    errorSpan=document.querySelector(`[name=${nameSpan}]`);
    if (errorSpan!==null){
      
            errorSpan.classList.add("animate__animated");
            errorSpan.classList.add(`${animation}`);
    }
   
}

function applyErrorToSubmit(form){
    let containerElement=document.createElement("div");
    let errorElement=document.createElement("small");
    let iconError=document.createElement("i");
    containerElement.classList.add('form__msg');
    containerElement.setAttribute('id','msgError');
    iconError.classList.add('bi');
    iconError.classList.add('bi-exclamation-triangle-fill');
    iconError.innerHTML="Tiene errores en el formulario";
    errorElement.appendChild(iconError);
    containerElement.appendChild(errorElement);
    form.before(containerElement);

}

