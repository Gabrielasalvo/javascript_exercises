// function soma (a,b) {
//     return a+ b

// }

// console.log(soma(3,3))

// subtracao =(a,b)=>{
//     return a * b
// }

// console.log(subtracao(5,5))

// const soma =(a,b)=>{
//     return a + b
// }

// console.log(soma(1,1))

// function exec(){
//     const saudacao = "fala"
//     return console.log(saudacao)
// }

// exec()

// const obj1 = {}

// obj1.nome ="Gabi"
// obj1["idade"] = 28

// console.log(obj1)

// const pessoa  ={
//     nome:"Ana",
//     idade:28,
//     endereco: {
//         rua: "Minas Gerais",
//         numero: 43
//     }
// }

// const {nome: name, idade: age } = pessoa
// console.log(name, age)
// const{endereco: {rua, numero, cep = 2897000}} = pessoa
// console.log(rua, numero,cep)

// function rand({min=0, max=100}={}) {
//     const num = Math.random(min, max)
//     return Math.floor(num)
// }
// const 

// console.log(rand())


// let notas =  {
//     nota : 10,
//     nota2 : 4,
//     nota3 : 7
// }

// // const media = function(a,b,c) {

// //     return a+b+c/b

// // }

// // console.log(media(notas.nota1))


// const { nota: n, nota2:n2} = notas

// console.log(n, n2)

// console.log(notas)


// function erro(error){
//     throw "Erro no índice. Verificar por favor"
// }


// let nome = "gabi"
// function gritar(n){
//     try {
//         console.log(nme.toUpperCase() + "!!!")
//     }catch(error) {
//         console.log(erro(error))
//     }
// }

// gritar()



/* Criar um while que pega o numero de familiares e pergunta a idade de cada um e ao final dê a soma de todos*/

// const repetir = function(repete) {

// }

// const familiares = 5
// const limite = familiares

// const repetir = function(repete) {
//     while(familiares <= limite) {
//         var idade = 5
//         return idade
//     }

//     let mediaIdade = idade/familiares


// }

// console.log(repetir())

// let arr = ["gabriela",2,3,4]

// for(i in arr) {
//    console.log(arr[i])
// }

// for(let i = 0; i <= arr.length; i++) {
//     console.log(`O índice é ${i} e o valor é ${[i]}`)
// }

// function soma() {
//     for(i in arguments)
//     console.log(arguments[i])

// }

// soma(12,13,14,45)

// function retorna(number:number):Boolean {
//     if(number  < 0 ) {
//         return "false"
//     }else if(!(Math.trunc (number)) ){
//         return "false"
//     }else
//     return "true"
// }


// function retorna(a, b) {
//     if(a >b) {
//        console.log(`${a} é maior que ${b}`)
//     }else {
//         console.log(`${b} é maior que ${a}`)
//     }
//     if(a%b === 0 || b%a ===0) {
//      console.log("Os numeros sao divisiveis")
//     } else {
//         console.log( "Os numeros nao sao divisiveis")
//     }

// }
// retorna (10,10)

// function criaRetangulo (a,b) {
//     return {

//         largura:a,
//         altura: b,
//         perimetro: 2*(a+b),
//         area: a*b
//     }
// }

// console.log(criaRetangulo(5,2)) 



// function recebe(string) {
//     for(let i= 0; i < string.legth; i++)
// }

 let func=(a, b)=> {
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
     
    }

    func(10,5)
    
function returnValue(a,b) {

    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

returnValue( 10,5)
