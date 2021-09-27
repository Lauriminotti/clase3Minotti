
/*
console.log("BIENVENIDO/A A MI CALCULADORA.JS");


let operacion = prompt("Escribar que operacion desea realizar: SUMA - RESTA - MULTI - DIVISION - ESC para salir");


while( operacion != "ESC"){

    let numeroUno = parseInt(prompt("Ingrese el primer"));
    let numeroDos = parseInt(prompt("Ingrese otro numero"));
    
    if(operacion == "SUMA"){
        
        console.log( numeroUno + numeroDos);


    }
    else if( operacion == "RESTA"){

        console.log( numeroUno - numeroDos);


    }

    else if ( operacion == "MULTI"){

        console.log( numeroUno * numeroDos);

    }

    else if ( operacion = "DIVISION"){

        console.log( numeroUno / numeroDos);

    }

    else{

        console.log("OPERACION NO ENCONTRADA");
    }

    operacion = prompt("Ingrese un operacion dentro del bucle");
}

*/

let votosA = 0;
let votosB = 0;


for( let i = 0 ; i < 10 ; i++){

    let votoUsuario = prompt("Ingrese su voto: Partido A o Partido B");

    if( votoUsuario == "A" ){

        console.log("VOTO A");
        votosA = votosA + 1;
    }
    else if( votoUsuario == "B"){

        console.log("VOTO B");
        votosB = votosB + 1;


    }
    else{

        console.log("VOTO EN BLANCO");
    }


}


if( votosA > votosB){

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("GANO A ");
}

else if( votosB > votosA){

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("GANO B ");


}
else{

    console.log("VOTOS A: " + votosA);
    console.log("VOTOS B: " + votosB);
    console.log("EMPATE");
}