/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/



// function jurosSimples (capital, tempo, taxa) {

//     return montante = capital*tempo*(taxa/100)
//     console.log(`O montante é ${montante}`)
  

// }

// jurosSimples(5,2,9).toFixed(2)


// function retornaMontanteSimples (capital, tempo, taxa) {

//     let jurosSimples = capital*tempo*(taxa/100)
//     return montante = capital + jurosSimples
    

// }

// console.log(retornaMontante(1000,1,25))

function retornaMontanteComposto(c,i,t) {
    let elevado = Math.pow(1+i,t)
    montante = c*(elevado/100)
    return montante
}

console.log(retornaMontanteComposto(30,5,1))