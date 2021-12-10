const elMayor = (a,b) => (a > b) ? a : b;

console.log(elMayor(9,22));

const tieneMembersia = (miembro) => (miembro) ? "Está registrado" : "No está registrado"

console.log(tieneMembersia(false));

// CON UN ARRAY

const amigo = true;

const amigosArr = [
    "Peter",
    "Tony",
    "Dr Strange",
    amigo ? "Thor" : "Loki"
]

console.log(amigosArr);