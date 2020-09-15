// EJERCICIO 2. - Escribir un programa utilizando React.js que imprima una X construida a base de la letra X
// y utilizar el carácter de subrayado como espacio. El tamaño de la X se basa en una variable n que
// indicará el tamaño de la letra para imprimir (en una matriz de n x n). Por ejemplo, para n: = 5 se
// obtiene:
// X___X
// _X_X_
// __X__
// _X_X_
// X___X
// y para n:=6 se obtiene:
// X____X
// _X__X_
// __XX__
// __XX__
// _X__X_
// X____X
// Si n es igual a cero imprimir "ERROR"
// Nota: Tenga en cuenta que el código debe imprimir los resultados exactamente como se muestra con el fin
// de que la pregunta sea considerada valida durante la prueba (El caracter "X" en mayúscula y el guion bajo
// "_" para los espacios)
// var n = 5;

export const exGrapher = (n) => {
  if (n > 0) {
    const matrix = new Array(n).fill(new Array(n).fill('_'));
    const resultMatrix = matrix.map((row, rowIndx) =>
      row.map((item, itemIndx) => {
        const positionX = rowIndx;
        const positionY = n - 1 - rowIndx;
        if (positionX == itemIndx) return 'X';
        if (positionY == itemIndx) return 'X';

        return item;
      })
    );
    console.log(resultMatrix);
    return resultMatrix;
  } else return [['_']];
};
