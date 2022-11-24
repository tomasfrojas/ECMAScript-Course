// Método matchAll para expresiones regulares
// El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.

// string.matchAll(regex)

// En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide.

const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, kiwi, Apple, orange, etc etc ect";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
