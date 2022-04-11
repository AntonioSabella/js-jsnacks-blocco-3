/* Descrizione:
 A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']
*/

const mixedLetterNames = ['luca', 'AMEDEO', 'Paolo', 'amBrogio'];

const capitalizedLetterNames = mixedLetterNames.map((names) => {
    return names.charAt(0).toUpperCase() + names.substring(1).toLowerCase();
});
console.log(capitalizedLetterNames);

/* Creo una funzione per capitalizzare ogni prima lettera delle stringhe di un array e adattare le restanti */

const allWordsArray = ['stefaNo', 'FRANCESCO', 'lucrEziA','ARMAndo','amBrogio'];
const allWordsArray1 = ['gRogU', 'FABIO', 'yODa','aLESSandro','AntONIO'];
const allWordsArray2 = ['rosSElla', 'FABIOLA', 'laeRTE','AURel','brunO'];

function capitalizeFirstWord (array) {
    return array.map(element => {
      return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
}

const arrayCapitalized = capitalizeFirstWord (allWordsArray);
console.log(arrayCapitalized);
const arrayCapitalized1 = capitalizeFirstWord (allWordsArray1);
console.log(arrayCapitalized1);
const arrayCapitalized2 = capitalizeFirstWord (allWordsArray2);
console.log(arrayCapitalized2);


