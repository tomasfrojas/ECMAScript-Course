// Propiedades de propagación
// Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

// Crear copias de objetos utilizando las propiedades de propagación
// Semejante a crear copias de arrays utilizando el operador de propagación, se puede realizar copias de objetos en un solo nivel mediante las propiedades de propagación.

// De esta manera el segundo objeto tendrá una referencia en memoria diferente al original.

// Cuidado con la copia en diferentes niveles de profundidad
// El operador de propagación sirve para crear una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro de un objeto a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia en la copia y en el original.

// La manera de solucionar esto es más compleja, tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad.

// Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.

const user = {
  username: "tompirojas",
  age: 31,
  country: "CO",
};

const { username, ...values } = user;
console.log(username);
console.log(values);
