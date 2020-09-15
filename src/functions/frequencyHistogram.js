// EJERCICIO 1. - Escribir un programa en React.js que recorra un arreglo y genere un histograma en base a
// los números de este. El arreglo se llama myArray y contiene 10 elementos que corresponden a números
// enteros del 1 al 5.
// Un histograma representa que tanto un elemento aparece en un conjunto de datos (Debe mostrar la
// frecuencia para todos los números del 1 al 5, incluso si no están presentes en el arreglo).
// Por ejemplo, para el arreglo: myArray:=(1,2,1,3,3,1,2,1,5,1) el histograma se vería así:
// 1: *****
// 2: **
// 3: **
// 4:
// 5: *
// Nota: Asegúrese de que los resultados se impriman exactamente como aparecen aquí, ya que incluso un
// espacio faltante o sobrante puede marcar la pregunta como incorrecta (Notar espacio entre los ":" y el
// primer asterisco).
// var myArray = [1,2,1,3,3,1,2,1,5,1];

//Aclaracion, en este ejercicio me limito solo a los numeros del 1 al 5 como el escenario especifica, entiendo que la
//longitud del array no esta limitada y que en el caso de ejemplo tuvo 10 valores, pero podrian ser mas. De igual manera
//introduzco un limite teorico. (1000 elementos)

const arrayReducerInTimes = (arrayToReduce) =>
  arrayToReduce.reduce((obj, b) => {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});

export const frequencyHistogram = (numArray) => {
  if (numArray.length < 1000) {
    const getValuesTimes = arrayReducerInTimes(numArray);
    const starChar = '*';

    const result = {
      1: ' ' + starChar.repeat(getValuesTimes['1']),
      2: ' ' + starChar.repeat(getValuesTimes['2']),
      3: ' ' + starChar.repeat(getValuesTimes['3']),
      4: ' ' + starChar.repeat(getValuesTimes['4']),
      5: ' ' + starChar.repeat(getValuesTimes['5']),
    };
    return result;
  } else throw new Error('Elements Limit Reached');
};
