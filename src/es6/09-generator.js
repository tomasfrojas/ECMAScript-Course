// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

// Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

// Cómo utilizar generadores
// La sintaxis de los generadores comprende lo siguiente:

// La palabra reservada function* (con el asterisco al final).
// La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
// Crear una variable a partir de la función generadora.
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
// Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

// const it = iterate(["Tomas", "Felipe", "Rojas", "Maria"]);
const it = iterate([1, 2, 3, 4]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
