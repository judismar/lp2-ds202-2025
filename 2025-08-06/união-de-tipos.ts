//União de tipos: um ou outro
let x: number | boolean;
x = true;
x = 5;

//prompt: quando cancela, retorna null; senão, retorna a string digitada
let y: string | null = prompt("Insira um valor: ");
if(y == null)
{
    console.log("Você cancelou.")
}
else
{
    //Conversão de tipos para número
    let z: number;
    z = Number(y);
    console.log(z);
}
