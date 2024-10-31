// Enunciado: Invertir un string.
const texto = "Hola, mundo!";
let resultadoInvertido = "";

// Solución:
for (let i = texto.length - 1; i >= 0; i--) {
  resultadoInvertido += texto[i];  // Se construye un nuevo string invirtiendo el orden de los caracteres.
}
console.log("Texto invertido:", resultadoInvertido);
