class Estudante
{
    nome: string;
    matricula: number;
    nota: number;

    constructor(nome: string, matricula: number, nota: number)
    {
        this.nome = nome;
        this.matricula = matricula;
        if(this.verificaNota(nota))
        {
            this.nota = nota;
        }
        else
        {
            console.log("Nota inválida");
            this.nota = 0;
        }
    }

    retificaNota(novaNota: number)
    {
        if(this.verificaNota(novaNota))
        {
            this.nota = novaNota;
        }
    }

    verificaNota(notaAtual: number)
    {
        if(notaAtual >= 0 && notaAtual <= 10)
        {
            return true;
        }
        else
        {
            return false;
        }
        //Num único comando:
        //return notaAtual >= 0 && notaAtual <= 10
    }
}

let e1: Estudante;
e1 = new Estudante("Judce", 12345, 10);
