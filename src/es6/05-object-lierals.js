//object literals

function newUser(user, age, country, id) {
  return {
    user,
    age,
    country,
    id,
  };
}

console.log(newUser("Tompi", 30, "colombia", 5));
