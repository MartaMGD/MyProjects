// FUNCIÓN NOMBRADA ********************************************************
// Lo que pasas entre paréntesis es simbólico. La máquina no lo reconoce como nombre,
// podría poner "patata" si quisiera.
function saludar(nombre) {
    console.log("Hola " + nombre);
    return 1;

    // Después del return, no se ejecuta NADA más
    console.log("Hola");
}

saludar("Fernando"); // Hola Fernando

// FUNCIÓN ANÓNIMA *********************************************************
const saludar2 = function (nombre) {
    console.log("Hola " + nombre);
}

saludar2("Marta") // Hola Marta

// FUNCIÓN DE FLECHA *******************************************************
const saludarFlecha = () => {
    console.log("Hola Flecha");
}

// Los paréntesis para el argumento no son obligatorios. 
const saludarFlecha = (nombre) => {
    console.log("Hola " + nombre);
}

// Si una función no tiene la palabra "return" explícita, no retorna nada. Es decir,
// da undefined. 

// EJEMPLO CON SUMATORIO *******************************************************
// Función nombrada
function sumar(a, b) {
    return a + b;
}

// Función flecha 
const sumar2 = (a, b) => {
    return a + b;
}

// Función flecha resumida. Solo si tiene un return
const sumar2 = (a, b) => a + b;


// Función con número aleatorio
function getAleatorio() {
    return Math.random();
}

// Función con número aleatorio (Con flecha)
const getAleatorio2 = () => Math.random();






