/* DESAFIO ENTREGABLE*/
/* Pido un número mediante prompt y le sumo otro numero en cada repetición, realizando una salida por cada resultado.*/
let numero= parseInt(prompt("Escribe un número"));
let numeroDos= 2;
for(let i = 1; i <= 5; i++){
    numero = numero + numeroDos;
    console.log(numero);
}

/*Pido un texto mediante prompt, concateno un texto en cada repetición, realizado una salida por cada
 resultado, hasta que se ingresa "ESC".*/

let concatenado= "hola juan carlosss";
let texto= "";
do {
    texto= prompt("Escribe aquí su mensaje");
    concatenado = concatenado + texto;
    console.log(concatenado);
} while( texto !== "ESC");

/*Pido un numero por prompt,repito la salida del mensaje "hola" la cantidad de veces ingresada.*/
let numeroPedir= parseInt(prompt("Escribe un número"));
for(let i = 1; i <= 5; i++){
    numeroPedir = numeroPedir + "hola";
    console.log(numeroPedir);
}


/* EXTRAS*/

/* Ejercicio entregable A En un club se va a realizar elecciones para elegir su próximo presidente, de la misma participan 2
 partidos el A y el B. Se sabe que van a votar 10 personas. Crear un programa que determine que partido gano. Se debe mostrar por
  consola el resultado de la elección.*/

let votosA = 0;
let votosB = 0;


for (let i = 0; i < 10; i++) {

    let votoUsuario = prompt("Ingrese su voto: Partido A o Partido B");

    if (votoUsuario == "A") {

        console.log("VOTO A");
        votosA = votosA + 1;
    } else if (votoUsuario == "B") {

        console.log("VOTO B");
        votosB = votosB + 1;


    } else {

        console.log("VOTO EN BLANCO");
    }


}


if (votosA > votosB) {

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("GANO A ");
} else if (votosB > votosA) {

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("GANO B ");


} else {

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("EMPATE");
}


/* Ejercicio entregable B Realizar un programar que solicite 2 números al usuario y la operación aritmética que desea
realizar(suma,resta). Se debe mostrar por consola el resultado de la operación seleccionada.*/

console.log("MI CALCULADORA.JS");

let operacion = prompt("Escriba que operación desea realizar: SUMA - RESTA - MULTI - DIVISION - ESC para salir");

while (operacion != "ESC") {

    let numeroUno = parseInt(prompt("Ingrese el primer"));
    let numeroDos = parseInt(prompt("Ingrese otro numero"));

    if (operacion == "SUMA") {

        console.log(numeroUno + numeroDos);


    } else if (operacion == "RESTA") {

        console.log(numeroUno - numeroDos);


    } else if (operacion == "MULTI") {

        console.log(numeroUno * numeroDos);

    } else if (operacion = "DIVISION") {

        console.log(numeroUno / numeroDos);

    } else {

        console.log("OPERACION NO ENCONTRADA");
    }

    operacion = prompt("Ingrese un operacion dentro del bucle");
}

/* Ejercicio no entregable A y B*/
for (let i = 1; i <= 10; i++) {
    const nombre = prompt("Escribe tu nombre");
    const apellido = prompt("Escribe tu apellido");
    const notas= notas.splice(" ");
    return (array.length);
    alert(nombre + apellido + notas);
    console.log(i);
}


/* ejercicio no entregable C Mostrar por consola la siguiente serie de números, se debe mostrar uno por iteración : 0 1 2 3 4 5 6 7 8 9 10*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*ejercicio no entregable D Mostrar por consola la siguiente serie de números, se debe mostrar uno por iteración: 10 9 8 7 6 5 4 3 2 1 0.*/
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
