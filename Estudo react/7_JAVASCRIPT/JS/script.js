// console.log(typeof "estou aqui"); 
// console.log(typeof 1 );

// // Arithmetic operations
// console.log(10 - 1);
// console.log(10 / 2);
// console.log('1' + '1');

// // Special numbers
// console.log(typeof Infinity);
// console.log(typeof -Infinity);
// console.log(12 * "n");

// // String
// console.log('teste');
// console.log("texto");
// console.log('555');

// // Special simbols
// console.log("testando a \nquebra de linha");
// console.log("Espaçamento \t de tab");


// //Concatenation
// console.log("Oi, " + "Tudo " + "bem?");

// // Template strings
// console.log('A soma de 2 + 2 é: ${2 + 2}');

// // Booleans
// console.log(true);
// console.log(10 == 10);
// console.log(10 > 30);

// // comparasion
// console.log(10 == 10);
// console.log(10 >= 10);
// console.log(100 <= 1000);
// console.log(10 === 10);
// console.log(10 != 9);

// console.log(9 == "9");
// console.log(9 === "9");
// console.log(9 != "10");
// console.log(9 !== "9");

// Logic Operation
/*
&& - AND

|| - OR

! - NOT
*/

// console.log(true && true);

// console.log(true&&false);

// console.log( 5 < 2 || 5 < 100);

// console.log(!true);

// // Empty 

// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == false);
// console.log(undefined == false);


// // Prompt

// const age = prompt("Digite a sua idade");

// console.log("voce tem " + age + " anos");

// // Math
// console.log(Math.max(5, 2, 1, 10));

// console.log(Math.floor(5.13));

// console.log(Math.ceil(5.14));

// // Console

// console.error("error!");

// console.warn(".");


// Switch

// const job = prompt("Escolha sua profissão\n1 - advogado\n2 - Programador\n3 - recepcionista\n4 - contador")

// switch(job) 
//{
//     case "1":
//         alert("Você é advogado")
//         break
//     case "2":
//         alert("Você é Programador")
//         break
//     case "3":
//         alert("Você é recepcionista")
//         break
//     case "4":
//         alert("Você é contador")
//         break
//     default:
//         alert("Profissão não encontrada")
// }

// Function

// function myfunction()
// {
//     alert("Teste")
// }

// myfunction();

// const myfunctionvariable = function ()
// {
//     alert("Função em variável");
// }

// myfunctionvariable();

// let txt = "oi";
// let bye = ""
// function withparameter(txt){
// alert(txt +", tudo bem?")
// }

// withparameter(txt);

// // Nested Scopes

// let a;
// const b = "";

// Arrow Function

const testeArrow = () =>{
    alert("Esta é uma arrow function");
};

testeArrow();

// Argument Defaut

const repeatText = (text, repeat = 2) => {
    for ( let i = 0; i < repeat; i++){
        console.log(text);
    }
}

repeatText("Teste");

repeatText("Agora 10 vezes", 10);

// closure

function someFunction(){
    let txt = "alguma coisa";

    function display() {
        console.log(txt + ", mais isso")
    }

    display();
}

someFunction();

// Recursion

const untilTen = (n,m) =>{
    if(n < 10 ){
        console.log("parou");

    } else {
        const x = n-m;

        console.log(x)

        untilTen(x,m)
    }
}

untilTen(100, 7)

function factorial(x) {
    if(x === 0){
        return 1;
        
    } else {
        return x * factorial(x-1);
    }
}
const num = 6;

const result = factorial(num);

alert(num + " tem fatorial de  " + result)