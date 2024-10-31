function calculadora() {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));
    const operacion = prompt('Ingresa la operación (+, -, *, /):');
  
    switch (operacion) {
      case '+':
        console.log(num1 + num2);
        break;
      case '-':
        console.log(num1 - num2);
        break;
      case '*':
        console.log(num1 * num2);
        break;
      case '/':
        console.log(num1 / num2);
        break;
      default:
        console.log('Operación no válida');
    }
  }
  
  