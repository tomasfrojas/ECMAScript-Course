//arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);
console.log(fruits[1]);

//object destructuring
let user = {
  username: "Tomas",
  age: 30,
};

let { username, age } = user;
console.log(username, age);
console.log(user.age);

// spread operator

let person = {
  name: "Tomas",
  age: 30,
};

let country = "COLOMBIA";

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}
sum(1, 8, 3, 4, 5, 6, 7, 4);

function solution(
  json1 = { name: "Mr. Michi", food: "Pescado" },
  json2 = { age: 12, color: "Blanco" }
) {
  return { ...json1, ...json2 };
}
console.log(solution({ name: "Bigotes", food: "Pollito" }));
