// Crear una lista de palabras
const palabras = ["manzana", "banana", "pera", "uva", "naranja", "kiwi", "limón"];

// Solicitar al usuario que ingrese una letra
const letra = prompt("Ingresa una letra:");

// Filtrar las palabras que comienzan con la letra ingresada
const palabrasFiltradas = palabras.filter(palabra => palabra.startsWith(letra.toLowerCase()) || palabra.startsWith(letra.toUpperCase()));

// Verificar si se encontraron palabras y mostrar el resultado
if (palabrasFiltradas.length > 0) {
  console.log(`Palabras que comienzan con la letra "${letra}":`);
  palabrasFiltradas.forEach(palabra => console.log(palabra));
} else {
  console.log(`No se encontraron palabras que comiencen con la letra "${letra}".`);
}
