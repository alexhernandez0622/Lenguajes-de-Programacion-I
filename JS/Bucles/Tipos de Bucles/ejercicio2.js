// Este programa sigue sumando números aleatorios entre 1 y 10 hasta que la suma supere 50
let suma = 0;

while (suma <= 50) {
    // Genera un número aleatorio entre 1 y 10
    let numero = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio: " + numero);
    
    // Añadimos el número a la suma total
    suma += numero;
    console.log("Suma actual: " + suma);
}
