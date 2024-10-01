const lista = [1, 2, 3, 4];
const itens = ["Matheus", true, 2, 4.12,[]];
console.log(lista);
console.log(itens);
console.log(itens[0]);

// Properties

console.log(lista.length)


//Method

const otherNumbers = [5, 6, 7]

const allNumbers = lista.concat(otherNumbers);

console.log(allNumbers);

// console.log(allNumbers.indexOF(1));


// Object Literals

 const person = {
    name: "Joao",
    age: 23,
    job: "Programador",

 };

 person.estado = "RJ";

 console.log(person);

//  console.log(person.job);

//   delete person.job;

//  console.log(person);

const employer = {
    salary: 1250.50,
    status: true
}

//Não altera o original (person)
Object.assign(employer, person);

console.log(employer);

console.log(person);

console.log(Object.keys(employer));

//Mutability

const client = person;

delete person.job;

console.log(client)


// push and pop 
const  names = ["joao", "Pedro", "Antunes", "Cardozo"]

names.push("Ferreira", "Jardim");

const noname = names.pop()

console.log(noname)

console.log(names)

// Loops 

for(let i = 0; i < names.length; i++) {
    console.log("Listando o : " + names[i]);
}

//shift e unshift

const letters = ["a", "b", "c","z"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("z", "y", "x")

console.log(letters)

// indexOf AND lastIndexOf
console.log(letters.indexOf("z"))

console.log([letters.indexOf("z")])

console.log([letters.lastIndexOf("z")])

// slice

const subletters = letters.slice(2 ,4)

console.log(subletters)


// forEach

letters.forEach((countLetters) => {
    console.log("A letra é: " + countLetters)
});

// Includes

const brands = ["BMW", "Fiat"]

console.log(brands.includes("Fiat"));

if(brands.includes("Fiat")){
    console.log("Há carros fiat disponiveis")
}

// trim

const trimtest="                   testando\n "
console.log(trimtest)
console.log(trimtest.length)
console.log(trimtest.trim())
console.log(trimtest.trim().length)

// padStart

const test = "1"

const newNumber = test.padStart(4, "0")

console.log(newNumber)

const testEnd = test.padEnd(4, "0")

console.log(testEnd)

// split

const words = "Joao pé de feijão"

const arrayWords = words.split(" ")

console.log(arrayWords)

// join

const itensCompra = ["Mouse", "Teclado", "Monitor"]

const listaItens = "Precisamos comprar" + itensCompra.join(", ") + ".";

console.log(listaItens)

// Rest Parameters

const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length;i++){
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2 ,3 ,5 ,10 , 60))

// for...of

const somaInfinita2 = (...args) => {

    let total = 0

    for(num of args){
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2 ,3 ,5 ,10 , 60))

//Destructuring object

const userDetails = {

    firstName: "Joao",
    lastName: "Ferreira",
    job: "Programador",
    
}

const {firstName, lastName, job} = userDetails;

console.log(firstName);

// renomear

const {firstName: primeiroNome } = userDetails;

console.log(firstName);

// Destructuring arrays

 const myList = ["Avião", "Submarino", "Carro"];

 const [veiculoA, veiculoB, veiculoC] = myList;

 console.log(veiculoA, veiculoB, veiculoC);

 // JSON

 const myjson = '{"name": "joao", "age": 23, "skills": ["PHP", "JS", "MYSQL", "GIT"]}';

 console.log(myjson);

 const myObject = JSON.parse(myjson)

 console.log(myObject);

 console.log(typeof myObject);

 const myNewJson = JSON.stringify(myObject);

 console.log(myNewJson);

 // Erro JSON

 const badJson = '{"name": Mathues}'

 const myBad = JSON.parse(badJson)

 console.log(myBad);

 