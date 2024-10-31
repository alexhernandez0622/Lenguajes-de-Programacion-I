function celsiusToFahrenheit() {
    const celsius = parseFloat(prompt('Ingresa la temperatura en grados Celsius:'));
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}`);
  }
  
  celsiusToFahrenheit();
  