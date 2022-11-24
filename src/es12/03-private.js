// Métodos privados de clases
// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

class usuario {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return "Holaaaa";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }
}
const developer1 = new usuario("Tomas", 30);
console.log(developer1.uAge);
console.log((developer1.uAge = 20));
