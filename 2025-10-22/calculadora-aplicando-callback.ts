//Aplicando funções de callback e funções seta: calculadora

function calculadora(a: number, b: number, operacao: (a: number, b: number) => number)
{
    return operacao(a, b);
}
console.log(calculadora(2, 5, (a: number, b: number) => {return a+b;}));
console.log(calculadora(3, 7, (a: number, b: number) => {return a-b;}));
console.log(calculadora(9, 17, (a: number, b: number) => {
                                    if(a < 10)
                                    {
                                        return a*b;
                                    }
                                    else
                                    {
                                        return a/b;
                                    }
                                    //em uma linha, ficaria assim (se chama operador ternário):
                                    //return a*b ? a < 10 : a/b;
                               }));
