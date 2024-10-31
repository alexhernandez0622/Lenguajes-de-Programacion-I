// Filtrar una lista de objetos según una condición

// Lista de objetos de personas con nombre y edad
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 18 }
  ];
  
  // Filtrar personas mayores de 20 años
  let mayoresDeVeinte = personas.filter(persona => persona.edad > 20);
  
  // Imprimir el resultado
  console.log(mayoresDeVeinte);
