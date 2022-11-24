const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Tomas lo lograste");
    } else {
      reject("Tomas no funciono!");
    }
  });
};
anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
