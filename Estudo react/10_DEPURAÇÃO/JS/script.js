// Strict

"use strict";


const opa = "teste";

// Debugger

let c = 1;
let d = 2

if(c == 1){
    c = 10 - d;
}

console.log("executou");

// debugger;

for(let i = 0; i > 5 ; i++){
    c = c +2;
}

const n = '1';

function checkNumber(n) {
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto")
        return;
    }

    console.log("Valor correto")
    return result;
}

checkNumber(n);
checkNumber(10);
checkNumber(null);
checkNumber("teste");


// Exceptions

let x = 10;

// if(x != 11) {
//     throw new Error("Valor inserido está incorreto");
// }

// Try catch
try {
    const soma = x + y;
}catch(error){
    console.log("erro no programa " + error);
}

//Finally

try{
    const value = checkNumber("asd");

    if(!value) {
        throw new Error("Valor inválido")
    }
}catch(error) {
    console.log("Opa, ouve um erro ai: " + error)
} finally{
    console.log("Executei codigo aqui ainda!")
}

// Assertion

function checkArray(arr) {
    if(arr.lenght == 0){
        throw new Error("O array precisa ter elementos")
    }else {
        console.log("O array tem " + arr.lenght + " elementos")
    }
}

checkArray([1, 2, 3]);