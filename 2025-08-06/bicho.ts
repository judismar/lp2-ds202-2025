//Usando null: quando bicho não tem dono.
class Bicho
{
    private nome: string;
    private readonly raca: string;
    private dono: Pessoa | null;

    public constructor(nome: string, raca: string, dono: Pessoa | null = null)
    {
        this.nome = nome;
        this.raca = raca;
        this.dono = dono;
    }

    public getNome(): string
    {
        return this.nome;
    }

    public getRaca(): string
    {
        return this.raca;
    }

    public getDono(): Pessoa | null
    {
        if(this.dono == null)
        {
            console.log(this.nome + " não tem dono.");
            return null;
        }
        else
        {
            return this.dono;
        }
    }
}
class Pessoa
{
    private nome: string;

    public constructor(nome: string)
    {
        this.nome = nome;
    }

    public getNome(): string
    {
        return this.nome;
    }
}

let d = new Pessoa("Judis");
let b = new Bicho("Pimpolho", "SRD", d);
let b2 = new Bicho("Biscoito", "pinsher");

console.log(b.getDono(), b2.getDono());
