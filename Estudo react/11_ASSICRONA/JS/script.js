// // // setTimeout

// // console.log("Ainda n executou")

// // setTimeout(function() {
// //     console.log("assicrona")
// // }, 2000)

// // console.log("Ainda n executou 2")

// // // setInterval

// // console.log("Ainda n comecou");

// // // setInterval(function() {
// // //     console.log("Intervalo assicrono");
// // // }, 3000);

// // console.log("ainda n comecou 2")

// // Promise

// const promessa = Promise.resolve(5 + 5)

// console.log("1");

// promessa.then(value => {
//     console.log('soma é: ' + value)
//     return value;
// })
// .then((value) => value - 1)
// .then((value) => console.log("agora é: " + value))

// console.log("2");

// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if(n > 10){
//             resolve("O numero é maior q 10")
//         }else{https://cas.correios.com.br/login?service=https%3A%2F%2Fprepostagem.correios.com.br%2Flogin%2Fcas
//             reject(new Error("Valor é menor que 10"))
//         }
//     });
// }

// const a = checkNumber(11);

// console.log(a);

// a.then((v) => console.log('o resultado é ' + v)).catch((err) =>
//     console.log("Um erro ocorreu" + err)
// )

// resolve multiple promisses


const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 1000)
});

const p2 = Promise.resolve(10+10);

const p3 = new Promise((resolve, reject) =>{
    if(30 > 10) {
        resolve(30);
    }else {
        reject("Erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// Async function
console.log("rapido");

async function somarComDelay(a, b) {
    return a + b;
}

somarComDelay(2, 4).then((value) =>{
    console.log("valor é: " + value);
})

// Await

function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu")
        }, 2000)
    });
}

async function ChamadaAsycn() {
    console.log("Chamando promise e aguardando")
    const result = await resolveComDelay()
    console.log("resultado chegou: " + result)
}

ChamadaAsycn();

// generators

function* generators() {
    yield 1;
    yield 2;
}

const gen = generators();

console.log(gen.next().value);
console.log(gen.next().value);