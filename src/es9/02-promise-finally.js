// Las promesas son algo que va a suceder, pero no sabemos cuando.

// Método finally en promesas
// El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

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
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally is over!"));
