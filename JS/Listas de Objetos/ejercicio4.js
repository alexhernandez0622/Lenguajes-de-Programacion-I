// Buscar un objeto en la lista por un atributo

// Lista de objetos de libros con título y autor
let libros = [
    { titulo: "El Quijote", autor: "Miguel de Cervantes" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }
  ];
  
  // Buscar un libro por título
  let libroBuscado = libros.find(libro => libro.titulo === "1984");
  
  // Imprimir el resultado
  console.log(libroBuscado);