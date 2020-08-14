// // /*node index.js no script ===> entrei na pasta Function e dei node no meu index.js*/

// // const pessoa = ["Gabriela", 28] // chave e valor literalmente
// // const pessoa =["Gabriela", 28] //literal
// // pessoa["hobbie"] = "natação" //dinamicamente
// // const [number1, number2]=[10,2]

// // console.log(pessoa)

// function createPpl() {
//   //factory simples
//   return {
//     nome: "Gabi",
//     idade: 28,
//   };
// }

// console.log(createPpl());

// function createproduct(nome, preco) {
//   return {
//     nome,
//     preco,
//   };
// }
// console.log(createproduct("Pencil", 1.99));


// const pessoa = {
//     saudacao:"olá",
//     falar() {
//         console.log(this.saudacao)
//     }
// }
// const pessoaFalando = pessoa.falar.bind(pessoa)


// // function intervalo() {
// //     this.idade = 0

// //     setInterval(()=>{
// //         this.idade++
// //         console.log("Happy Birthday!!" + this.idade)
// //     },1000)
// // }

// // intervalo()

// function intervalo() {
//     this.idade = 0

//     setInterval(function(){
//         this.idade++

//         console.log(this.idade)
//     },bind(this), 1000)
// }

// function run(fun) {
//     fun()
// }
// run(function(){
//     console.log("Ola")
// })

// const pessoa ={

//     saudacao: "Bom dia",
    
//      falar(){
//         console.log(this.pessoa)
//     }

    
// }
// falar().bind(pessoa1)


// pessoa.idade = 28


// pessoa["hobbie"] = "swimming"
// console.log(pessoa)
// const arr =[n1=number1, n2=number2] = [10,23]

// const pessoa = { nome:"Gabi"}
// const{nome:name }= pessoa
// console.log(name)

// function create(name, age) {
//     return{
//     name,
//     age
//     }
    
// }

// let newPerson = new create("Gabriela", 28)
// console.log(newPerson)

// function carro(modelo, combustivel, velocidade) {

//     return {
//         modelo,
//         combustivel,
//         velocidade = 1,

//         this.getVel= function() {
//             this.velocidade =+5
//         }
//     }
// }
// let uno = new carro("volks", "gasolina", 5)
// uno.getVel(5)
// console.log(uno)


// const pessoa={

//     saudacao:"Bom dia!",

//     falar() {
//         console.log(this.saudacao)
//     }
// }

// pessoa.falar()

// let falarDePessoa = pessoa.falar.bind(pessoa)


// const soma = function(x,y) {
//     return x+y
// }

// imprimeResultado = function(a,b, operacao = soma) {
//     console.log(operacao(a,b))
// }

// imprimeResultado(5,5)


// const fabricantes =["Bmw", "volks"]

// function imprime(nome, indice) {
//     console.log(`${indice}. ${nome}`)
// }

// fabricantes.forEach(imprime) // callback chama de volta para cada elemento percorrido do array a função imprime()

// fabricantes.forEach(item=>{
//     console.log(`${item}`)
// })


// function pessoa(){
//    this.idade =0

//   setInterval(() => {
//       this.idade++
//       console.log(this.idade)
      
//   }, 1000);
// }
// new pessoa

// const pessoa2 = {

//     idade: 0,

//     sumAge(){
//       console.log(this.idade +=1) 
//     }
// }


// pessoa2.sumAge()


// function createPerson(name, age) {
//     return {

//         name,
//         age,

//         this.getAge = function() {
//             this.age
//         }
//     }
// }


// let gabi = new createPerson("Gabi",28 )
// console.log(gabi)
// gabi.getAge()


// function Pessoa(nome) {
//     this.nome = nome

//     this.falar = function() {
//         console.log(`${nome}, este é meu nome!`)
//     }
// }

// let gabs = new Pessoa("Gabriela")
// gabs.falar()

// USANDO CLASSE 


class Pessoa2 {
    constructor(nome, idade) {
        this.nome = nome,
        this.idade =idade

    }
    falar() {
        console.log(`Meu nome é ${this.nome}, e minha idade é ${this.idade}`)
    }
}

let gabs = new Pessoa2("Gabriela", 28)
gabs.falar()


//USANDO FUNCTION TB MAIS SIMPLES
function criarpersona (nome, idade){

    return {
        idade,
        nome
    }
}

const hi = new criarpersona("Gabi", 28)

console.log(hi)

//USANDO OBJETO (FUNCTION FACTORY)

const criaPessoa = (nome, idade)=> {
    return {
        falar: ()=> console.log(`Meu nome ${nome} e minha idade é ${idade}`)
    }
}
