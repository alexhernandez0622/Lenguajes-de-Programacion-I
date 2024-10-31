// Enunciado: Verificar si un elemento específico está presente en un array.
const frutas = ["manzana", "pera", "uva", "plátano"];  // Se define un array de strings.
const elementoBuscado = "uva";  // Se define el elemento a buscar.

// Solución:
let encontrado = false;  // Se inicializa una variable para el estado de búsqueda.
for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === elementoBuscado) {
    encontrado = true;  // Se cambia a true si se encuentra el elemento buscado.
    break;  // Se sale del bucle una vez encontrado el elemento.
  }
}
console.log(`¿${elementoBuscado} está en el array? ${encontrado ? "Sí" : "No"}`);  // Se imprime el resultado.

