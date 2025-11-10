abstract class Jogador
{
    public nome: string;
    public vida: number;
    public forca: number;

    constructor(
         nome: string,
         vida: number = 50,
         forca: number = 1
    ) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

     abstract atacar(alvo: Jogador): void;

    receberDano(dano: number): void
    {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
    }

     estaVivo(): boolean
    {
        return this.vida > 0;
    }
}

class Guerreiro extends Jogador
{
    constructor(nome: string, vida: number = 50, forca: number = 5)
    {
        super(nome, vida, forca);
    }

    atacar(alvo: Jogador): void
    {
        let dano = this.forca + Math.floor(Math.random()*10);
        alvo.receberDano(dano);
    }
}

class Arqueiro extends Jogador
{
    private mirando: boolean = false;

    constructor(nome: string, vida: number = 50, forca: number = 1)
    {
        super(nome, vida, forca);
    }

    atacar(alvo: Jogador): void
    {
        //Se estiver mirando, causa mais dano
        let dano = this.mirando ? 3*(this.forca + Math.floor(Math.random()*10)) : this.forca + Math.floor(Math.random()*10);
        alvo.receberDano(dano);
		    this.mirando = false;
    }

    mirar()
    {
        this.mirando = true;
    }
}
