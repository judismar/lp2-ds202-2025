//Dois iguais: não é estrito; é "solto"
//Três iguais: igualdade estrita de valores.

console.log(3 == '3'); //true
console.log(3 === '3'); //false

console.log(0 == false); //true
console.log(0 === false); //false

console.log(null == undefined); //true
console.log(null === undefined); //false

//Em suma: Usar 3 iguais e !== pode ser muito útil para comparar tipos sem gerar bugs!
