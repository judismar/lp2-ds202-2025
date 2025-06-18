class BichoDeEstimacao //Superclasse
{
    private nome: string
    private idade: number;
    private sexo: string;

    public constructor(nome: string, idade: number, sexo: string)
    {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

class Cachorro extends BichoDeEstimacao //Classe que herda: subclasse. Todas as propriedades são herdadas.
{
    private raca: string;

    public constructor(nome: string, idade: number, sexo: string, raca: string)
    {
        super(nome, idade, sexo);
        this.raca = raca;
    }
}

class Gato extends BichoDeEstimacao
{
    private ehCastrado: boolean;
    public constructor(nome: string, idade: number, sexo: string, cast: boolean)
    {
        super(nome, idade, sexo);
        this.ehCastrado = cast;
    }
}

class Pessoa
{
    private nome: string;
    private pet: BichoDeEstimacao;

    public constructor(nome: string, pet: BichoDeEstimacao)
    {
        this.nome = nome;
        this.pet = pet;
    }
}

let cachorro1 = new Cachorro("Pimpolho", 9, "M", "SRD");
let pessoa1 = new Pessoa("Judis", cachorro1);
let gato1 = new Gato("Lua", 10, "F", true);

let bichos: BichoDeEstimacao[] = []; //array de bichos: Gato e Cachorro SÃO BichoDeEstimacao
bichos.push(cachorro1);
bichos.push(gato1);
