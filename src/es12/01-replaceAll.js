// Método replaceAll
// El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

// Este método recibe dos argumentos:

// El patrón a reemplazar, puede ser un string o una expresión regular.
// El nuevo elemento que sustituye al reemplazado.
// Este procedimiento fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez por invocación.

const string = "JavaScript es un maravilloso lenguaje de programacion";

const replaceString = string.replace("JavaScript", "TypeScript");

console.log(replaceString);

console.log(string);
