//Funções de callback e funções seta

function f(a1: any, a2: any, cb: any) //cb: função de callback, que é chamada dentro de f
{
    console.log(a1, a2);
    console.log(cb(a1, a2) - 1);
}

f("Oi", 3, (a: any, b: any) =>
           {
                console.log(a);
                return b*5;
           })
