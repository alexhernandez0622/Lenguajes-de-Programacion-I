// Determinar si una contraseña es segura (más de 8 caracteres)
/*estamos comprobando si el octavo carácter de la cadena contraseña existe. Si existe, significa que la contraseña tiene al menos 8 caracteres, por lo que es segura. Si no existe, entonces la contraseña es insegura. */
let contraseña = "admin";
let esSegura = (contraseña[7] !== undefined);

if (esSegura) {
    console.log("Contraseña segura");
} else {
    console.log("Contraseña Insegura");
}