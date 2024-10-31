// Ordenar una lista de objetos por un atributo

// Lista de objetos de estudiantes con nombre y puntaje
let estudiantes = [
    { nombre: "Ana", puntaje: 85 },
    { nombre: "Luis", puntaje: 92 },
    { nombre: "Carlos", puntaje: 75 }
  ];
  
  // Ordenar estudiantes de mayor a menor puntaje
  estudiantes.sort((a, b) => b.puntaje - a.puntaje);
  
  // Imprimir el resultado
  console.log(estudiantes);