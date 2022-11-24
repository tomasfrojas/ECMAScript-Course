// Qué es el aplanamiento de arrays
// El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

// Método flat
// El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe un argumento:

// La profundidad del aplanamiento, por defecto, tiene un valor de 1.
// Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.

// Método flatMap
// El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe los mismos argumentos que el método map.

//flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));

// flatmap
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));
