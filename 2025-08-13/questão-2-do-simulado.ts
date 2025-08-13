class BichoDeEstimacao
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

    public setNome(novoNome: string): void
    {
        this.nome = novoNome;
    }
}

class Pessoa
{
    private nome: string;
    private bichos: BichoDeEstimacao[] = [];

    public constructor(nome: string)
    {
        this.nome = nome;
        //Alternativa a inicialização da lista de bichos:
        //this.bichos = [];
    }

    public getNome(): string
    {
        return this.nome;
    }

    public adotaBicho(novoBicho: BichoDeEstimacao): void
    {
        this.bichos.push(novoBicho);
    }

    public getBichoPorIndice(indice: number): BichoDeEstimacao
    {
        return this.bichos[indice-1]; //pega de 1 a n, não de 0 a n-1
    }
}
