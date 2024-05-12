//#################################################################
//Inicio de los controles para los campos
//#################################################################


/**
 * 
 * @param {String} nameInput El contenido del input que registrará el nombre del usuario
 * @returns {String} retornará un string que será vacío en caso de que no haya errores
 */
function controlName(nameInput){
    $errorMessage="";
    if(nameInput.value.length===0) $errorMessage="Coloque un nombre por favor";
    if(nameInput.value.length<=3 && $errorMessage==="") $errorMessage="El nombre debe tener mínimo 3 caracteres";

    return $errorMessage.trim();

}

/**
 * 
 * @param {String} lastNameInput El contenido del input que registra el apellido del usuario
 * @returns {String} Retornará un string que será vacío en caso de error
 */
function controlLastName(lastNameInput){

    $errorMessage="";
    if(lastNameInput.value.length===0) $errorMessage="No deje el apellido en blanco";
    if(lastNameInput.value.length<=3 && $errorMessage==="") $errorMessage="El apellido debe tener mínimo 3 caracteres";

    return $errorMessage.trim();
}
//#################################################################
//Fin de los controles para los campos
//#################################################################


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

export default controlName;