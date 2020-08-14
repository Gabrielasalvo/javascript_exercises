// const pessoa = {
//     nome: "Gabi"
// }

// pessoa.idade =28 //adicionando com a notação ponto
// pessoa["hobbie"] = "play videogames" //anotação key
// const  {nome, idade} =  pessoa
// function Produto(nome, preco, desc) {
//     this.nome = nome // dizendo que o nome receberá a variável nome
//     this.preco = preco
//     this.getDescount =()=> {
//        return preco *(1 - desc) // método do objeto.
//     }

// }
// const newProduct = new Produto('Pen', 23.99, 0.2) //instânciando objeto.
// console.log(newProduct.getDescount())

// function createPpl(arguments) {
//     return (
//         nome,
//         idade

//     )
// }

// console.log(createPpl("Gabriela", 28))


//GET E SET
const gabriela = {
    _idade: 1, //CONVENCAO USAR UNDESCORE
    get idade(){
        return this._idade++
    },
    set idade(idade){
        if(idade > 0) {
            this._idade = idade
        }
    }
}

console.log(gabriela.idade, gabriela._idade)


const obj1 = {
    name: "Alexia",
    age:23,
    hobbie:"play fortnite"
}

const obj2 = {
    name2: "Gabi",
    age2:28,
    hobbie2:"play tlous",
    getnome:()=>console.log(name2)
}
const pessoas = {
  
}

const maiorObjt=Object.assign(pessoas, obj1,obj2)
console.log(pessoas)