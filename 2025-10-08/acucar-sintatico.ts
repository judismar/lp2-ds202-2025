class A
{
    x = 3;
}

let a: A | null = new A();
//a = null;

//Usando if para verificar se uma variável guarda objeto ou null
if(a !== null)
{
    console.log(a.x);
}
else
{
    console.log("Nulo.")
}

//Usando os operadores ? e ??: uma linha de código.
console.log(a?.x ?? "Nulo.");

//Usar ? antes do ponto: verifica se a é null e trata caso seja (retornando undefined)
//Usar ??: operador binário, que retorna o elemento à esquerda se ele não for null nem undefined. Caso contrário, retorna o elemento à direita.
//Note que, em português, escrevi os comentários com se e senão (if e else)
//Os operadores ? e ?? podem ser usados separadamente!
