// Agregar un nuevo objeto a una lista

// Lista de objetos de productos con nombre y precio
let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Teléfono", precio: 500 }
  ];
  
  // Nuevo producto a agregar
  let nuevoProducto = { nombre: "Tablet", precio: 300 };
  
  // Agregar el nuevo producto a la lista
  productos.push(nuevoProducto);
  
  // Imprimir el resultado
  console.log(productos);