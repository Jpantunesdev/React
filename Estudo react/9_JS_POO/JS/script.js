// // Method

// const animal = {
//     nome: "Fred",
//     tipo: "Gato",
//     miar: function() {
//         alert("meow meow");
//     }
// }

// animal.miar();

// console.log(animal.nome);

// const person = {
//     nome: "Joao",
//     getNomeCompleto: function() {
//         return this.nome + " Cardozo";
//     },

//     setNomeCompleto: function(novoNome) {
//         return this.nome = novoNome;
//     }
// }

// console.log(person.getNomeCompleto());

// person.setNomeCompleto("Elisa");

// console.log(person.getNomeCompleto());

// // Prototype

// const myProto = {
//     a: "a",
// }

// console.log(Object.getPrototypeOf(myProto));

// console.log(Object.getPrototypeOf(myProto) === Object.prototype);

// const mySecondObject = Object.create(myProto);

// console.log(mySecondObject);

// // Classes

// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao.raca)

// console.log(pastorAlemao.patas)

// // function construction

// function criarGato(nome, raca) {
//     const gato = Object.create({});

//     gato.nome = nome;
//     gato.raca = raca;

//     return gato;

// }

// const Fred = criarGato("Fred", "Vira-lata");

// console.log(Fred);


// function Pato(nome, raca) {

//     this.nome = nome;
//     this.raca = raca;
// }

// const patoCanadense = new Pato("joel", "Pato Canadense")

// console.log(patoCanadense);

// // Functions with methods

// Pato.prototype.quack = function () {
//     alert("Quack, Quack");
// };

// patoCanadense.quack();

// // Classes es6

// class Caminhao {
//     constructor(nome, modelo, ano){
//         this.nome = nome;
//         this.modelo = modelo;
//         this.ano = ano;
//     } 

//     descreverCaminhao() {
//         console.log("Este caminhão é do ano " + this.ano + ". E o seu modelo é " + this.modelo);
//     }
// }

//     // Override
//     Caminhao.prototype.cor = "indefinida";

//     const scania = new Caminhao("Scania", "XYZ", "2015");

//     scania.descreverCaminhao();

//     const c2 = new Caminhao("ABC", "XYZ", "2015");

//     Caminhao.prototype.motor = 4.0;

//     console.log(c2.motor)

//     console.log(scania.cor);

//     // Symbol

//     class Aviao{
//         constructor(marca , turbinas) {
//             this.marca = marca;
//             this.turbinas = turbinas;
//         }
//     }


//     const asas = Symbol()

//     Aviao.prototype[asas] = 2;

//     const boeing = new Aviao("boeing", 10);

//     console.log(boeing);

//     console.log(boeing[asas]);

//     // Getters e Setters


//     class Post {
//         constructor(title, description, tags) {
//             this.title = title;
//             this.description = description;
//             this.tags = tags;
//         }

//         get showTitle(){
//             return "You are reading" + this.title;
//         }

//         set addTags(tags){
//             const tagsArray = tags.split(" ,");
//             this.tags = tagsArray;
//         }
//     }

//     const myPost = new Post(" something post", "É um post sobre programação");

//     console.log(myPost);

//     console.log(myPost.showTitle);

//     myPost.addTags = "Programacao, javascript, js";

//     console.log(myPost);

    // Heritage

    class Carnivoro {
        constructor(patas){
            this.patas = patas;
        }
    }

    class Lobo extends Carnivoro {
        constructor(patas, nome){
            super(patas, nome);
            this.nome = nome;
        }
    }

    const bombom = new Lobo(4, "Bombom");

    const bola = new Lobo(4, "bola");

    console.log(bombom);

    console.log(bombom.patas);

    console.log(bola);

    console.log(bola.patas);


    //instanceof

    console.log(bombom instanceof Lobo);

    console.log(bombom instanceof Carnivoro);