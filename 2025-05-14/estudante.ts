class Estudante
{
    private nome: string;
    private matricula: number;
    private nota: number;

    public constructor(nome: string, matricula: number, nota: number)
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

    public retornaNota() //método get: retornar um valor privado
    {
        return this.nota;
    }

    public retificaNota(novaNota: number) //método set: alterar um valor
    {
        if(this.verificaNota(novaNota))
        {
            this.nota = novaNota;
        }
        else
        {
            console.log("Nota inválida.");
        }
    }

    private verificaNota(notaAtual: number)
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
e1.retificaNota(3.2);
