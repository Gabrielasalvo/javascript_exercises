// const fabricantes = ["Bmw", "volks"];

// function imprime(nome, indice) {
//   console.log(`${indice}. ${nome}`);
// }

// fabricantes.forEach(imprime); // callback chama de volta para cada elemento percorrido do array a função imprime()

// fabricantes.forEach((item) => {
//   console.log(`${item}`);
// });

// const notas = [1, 4, 6, 7, 87, 6, 5, 4];

// const notasBaixas = notas.filter((nota) => {
//   return nota < 7;
// });

// console.log(`${notasBaixas}, notas baixas!`);

// function carro(velocidade = 200, delta = 5) {
//   let velocidadeMinima = 0;

//   this.getVelocidade = function () {
//     return (velocidadeMinima += delta);
//   };
// }

// const uno = new carro();
// console.log(uno.getVelocidade());


// //FACTORY
// const criaCarro =(nome)=> {
//     return {
//         falar:()=> console.log(`A marca é ${nome}`)
//     }
// }
// const carr = criaCarro('Uninho 4 portas, incrível!')
// carr.falar()

// (function(){
//     console.log("Imprime na hora que é invocada. IMEDIATAMENTE IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION")
// })()

function imprime(indice,outra ){
    console.log(`1. ${indice}, 1. ${outra}`)
}

const arr = ["gabi", "alexia"]

arr.forEach(imprime)