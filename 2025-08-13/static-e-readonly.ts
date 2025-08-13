//Treinando static sem encapsulamento
class A
{
    public static x: number = 7;
    public readonly b: boolean = true;
}

console.log(A.x);
A.x = 3;

let a = new A(); //Instanciar: usar o construtor (new)
console.log(a.b)
a.b = false; //Erro: readonly
