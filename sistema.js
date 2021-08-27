let numeroDeAlunos = 10;

// uso de contador com for e if/else if/else para condicional

for (let contador = 0; contador <= numeroDeAlunos; contador++) {

    if (contador === 0) {
        console.log(" O número atual é ZERO. ")
    } else if (contador % 2 == 0 ){
        console.log(" O número " + contador + " é PAR. ")
    } else {
         console.log(" O número " + contador + " é ÍMPAR. ")
    }    
 }

//uso de while: declara a variável e o contador antes do while. Dentro do while if, else if e else.

let contador = 0 

while (contador <= numeroDeAlunos) {
    if (contador === 0) {
        console.log("O número atual é ZERO. ")
    } else if (contador % 2 != 0){
        console.log(" O número " + contador + " é ÍMPAR. ")
    } else{
        console.log(" O número " + contador + " é PAR. ")
    }
    contador++ 
}

