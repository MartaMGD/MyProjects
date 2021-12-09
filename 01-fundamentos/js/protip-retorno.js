const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona("Marta", "González")

console.log(persona);



function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, "Hola")

// Para desestructurar un objeto con una función de flecha:
const desestructurarObjeto = ({nombre, apellido, edad}) => {
    console.log(nombre);
    console.log(apellido);
}