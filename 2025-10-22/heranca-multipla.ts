class Pessoa
{
    protected nome: string = "Tomás";
    protected cpf: number = 123;
}

class Estudante extends Pessoa
{
    matricula: string = "m01890237";
    public fazAlgo(){console.log("Aprende")}
}

//Classe abstrata especial, onde tudo é público e declarado, nada implementado.
interface Professor extends Pessoa
{
    matriculaProfessor: number;
    fazAlgoProfessor(): void;
}

class EstudanteProfessor extends Estudante implements Professor
{
    matriculaProfessor: number = 425755;
    fazAlgoProfessor(): void
    {
        console.log("Ensina (e aprende também)")
    }
}

let ep = new EstudanteProfessor();
ep.fazAlgo(); //Qual fazAlgo estamos chamando? 
ep.fazAlgoProfessor();
console.log(ep.matricula);
console.log(ep.matriculaProfessor);
