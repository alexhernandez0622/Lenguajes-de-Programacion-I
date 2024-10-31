// Enunciado: Encontrar el número mayor en un array de números.
const numeros = [12, 5, 8, 20, 3];  // Se define un array de números.
let mayor = numeros[0];  // Se asigna el primer elemento como el candidato a mayor.

// Solución:
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];  // Se actualiza el número mayor si se encuentra uno mayor.
  }
}
console.log("El número mayor es:", mayor);  // Se imprime el número mayor.

