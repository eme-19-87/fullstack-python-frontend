/**
 * 
 * @param {HTMLInputElement} dataInput El elemento input que contendrá el dato que vamos a controlar
 * @returns {String} Retorna un string con el código de error. En caso de que no haya, será vacío
 */
function onlyLetters(dataInput){
    const onlyLetterRegex=/^[A-ZÁÉÍÓÚÑ]+$/i;
    const errorMessage=onlyLetterRegex.test(dataInput.value)?"":"El campo sólo debe contener letras";
    return errorMessage.trim();
}

/**
 * 
 * @param {HTMLInputElement} dataInput El elemento input que contendrá el dato que vamos a controlar
 * @returns {String} Retorna un string con el código de error. En caso de que no haya, será vacío
 */
function onlyIntegers(dataInput){
    const onlyIntegersRegex=/^\d{8,10}$/;
    const errorMessage=onlyIntegersRegex.test(dataInput.value)?"":"El campo sólo debe contener de 8 a 10 números";
    return errorMessage.trim();
}



export { onlyIntegers,onlyLetters}