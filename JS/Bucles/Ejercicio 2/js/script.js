
/*Inicia un array llamado "numeros" vacío. Dos funciones de flecha permiten al usuario ingresar números y calcular su promedio.  */

//Incialiación del arreglo
let numeros = [];

//Inicialización de la función
// Utilizamos una función de flecha para obtenerNumeros
const obtenerNumeros = () => {
    // Obtenemos el elemento de entrada con el id "cantidad"
    const cantidadInput = document.getElementById("cantidad");

    // Obtenemos el valor del campo de entrada y lo convertimos a un número entero
    const cantidad = parseInt(cantidadInput.value);

    // Verificamos que la cantidad sea mayor que cero
    if (cantidad > 0) {
        // Obtenemos el elemento con el id "lista-numeros"
        const listaNumeros = document.getElementById("lista-numeros");

        // Limpiamos el contenido html del elemento listaNumeros
        listaNumeros.innerHTML = "";

        // Iteramos según la cantidad de números ingresados por el usuario
        for (let i = 0; i < cantidad; i++) {
            // Solicitamos al usuario que ingrese el número
            const numero = prompt("Ingrese el número " + (i + 1) + ":");

            // Convertimos el número ingresado a decimal y lo agregamos al array 'numeros'
            numeros.push(parseFloat(numero));

            // Creamos un nuevo elemento li para mostrar el número en la lista
            const li = document.createElement("li");
            li.textContent = numero;

            // Añadimos el elemento li a la lista de números
            listaNumeros.appendChild(li);
        }
    }
};

// Utilizamos una función de flecha para calcularPromedio
const calcularPromedio = () => {
    // Obtenemos el elemento con el id "resultado"
    const resultadoElemento = document.getElementById("resultado");

    // Verificamos si hay números ingresados en el array 'numeros'
    if (numeros.length > 0) {
        // Calculamos la suma de los números utilizando el método reduce()
        const suma = numeros.reduce((total, numero) => total + numero, 0);

        // Calculamos el promedio
        const promedio = suma / numeros.length;

        // Mostramos el resultado con dos decimales en el elemento resultadoElemento
        resultadoElemento.textContent = "El promedio es: " + promedio.toFixed(2);
    } else {
        // Si no hay números, mostramos un mensaje indicando que no se ingresaron datos
        resultadoElemento.textContent = "No se ingresaron datos, por favor ingrésalos";
    }
};