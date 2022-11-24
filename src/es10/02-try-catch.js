// Parámetro opcional de catch
// El parámetro opcional de catch permite omitir el error si es necesario.
// Aunque siempre es recomendable manejar el error como parámetro, ya que tiene más información del problema.

try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherFn();
} catch {
  console.log("Esto es un erorr");
}
