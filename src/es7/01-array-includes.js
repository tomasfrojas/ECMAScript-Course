// Método includes
// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento.
// Índices positivos y negativos
// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

// [0,1,2,3, ...., lenght-1]

// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

// [-lenght, ...,  -3, -2, -1]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(4));
console.log(numbers.includes(9));

const list = ["Tomas", "David", "Maria"];
console.log(list.includes("Tomas"));
console.log(list.includes("tomas"));
