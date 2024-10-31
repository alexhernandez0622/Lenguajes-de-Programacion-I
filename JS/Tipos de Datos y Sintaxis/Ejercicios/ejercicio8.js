// Ejercicio: Crea un símbolo con una descripción y úsalo en un objeto.
let simbolo = Symbol('clave');
let objeto = {
  [simbolo]: 'Valor asociado al símbolo'
};
console.log(objeto[simbolo]);
