/* Invertir una Cadena de String*/

//Inicializamos la cadena de texto a invertir
 const texto = "Hola, Augusto";
 // Inicializar la variable con el texto invertido
 let resultadoInvertido = "";

 // Inicializar el bucle
 for(let i = texto.length - 1; i>=0; i--){
    // SE construye un nuevo string invirtiendo el orden de los datos
    resultadoInvertido += texto[i];
 }
 
 // Imprimir los datos
 console.log("El texto invertido es:", resultadoInvertido);