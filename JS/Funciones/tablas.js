const tablaMultiplicacion = () => {
    const numero = parseInt(prompt('Ingresa un número entero:'));
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  };
  
  tablaMultiplicacion();
  