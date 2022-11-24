// La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver problemas con el paradigma de programación orientada a objetos (POO).

// Estructura de las clases en JavaScript
// La estructura de clases en JavaScript consiste en:

// Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula).
// La función constructora sirve para crear las variables necesarias en la instancia del objeto, a partir de los argumentos en la instancia.
// Para definir atributos necesitas el contexto this, que representa la instancia del objeto.
// Métodos para definir las acciones de la clase.
// Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.

// declarando
class User {}

// instancia de una clase
const newUser = new User();

// class user {
//   metodos
//   greeting() {
//     return "Hello";
//   }
// }

// const tompirojas = new user();
// console.log(tompirojas.greeting());

// const developer = new user();
// console.log(developer.greeting());

//constructor

class user {
  // constructor
  contructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "Hello";
  }
}

const david = new user();
console.log(david.greeting());

// this

class username {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return "Hola!!!";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new username("Ana");
console.log(ana.greeting());

//setter getters

class usuario {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "Holaaaa";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
}
const developer1 = new usuario("Tomas", 30);
console.log(developer1.uAge);
console.log((developer1.uAge = 20));
console.log(developer1.name);
