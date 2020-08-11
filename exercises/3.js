/*
03) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

*/ 

function returnValueDivide(a,b) {
    console.log("rem", Math.floor(1000*a%b))
    console.log("div", Math.trunc(1000*(a/b)))


}

returnValueDivide(2,100)