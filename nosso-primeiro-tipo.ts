//Definindo tipos por meio de classes: a essência de Programação Orientada a Objeto

class Estudante
{
    nome: string;
    idade: number;
    matricula: number;
    nota: number;

    constructor(nome: string, id: number, mat: number)
    {
        this.nome = nome;
        this.idade = id;
        this.matricula = mat;
        this.nota = 10;
    }

    elogia(e: Estudante)
    {
        console.log(this.nome + " elogia " + e.nome);
    }
}

let e1: Estudante;
e1 = new Estudante("Artur", 17, 12345);
let e2: Estudante;
e2 = new Estudante("Manu", 16, 425672);

e1.elogia(e2);