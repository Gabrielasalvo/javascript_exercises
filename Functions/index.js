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


function intervalo() {
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log("Happy Birthday!!")
    },1000)
}