//Abstração: Simplificar o complexo. Exemplo: temos o território Brasileiro, mas podemos usar um mapa para nos localizar. Outro exemplo: em LP1, usamos as funções print() e randint() sem saber como são implementadas, mas sim como são usadas.
//Classes são abstrações de objetos que compartilham as mesmas propriedades, que tem as mesmas características.

//Modularização: Dividir o programa em partes (módulos): funções, classes etc.

//Encapsulamento: Separação dos detalhes externos de um objeto (que são acessíveis), de seus detalhes internos de implementação, os quais podem ser abstraídos. Exemplo: Funcionamento do microondas.

class Pessoa
{
    protected nome: string;

    public constructor(nome: string)
    {
        this.nome = nome;
    }

    public interage(outraPessoa: Pessoa)
    {
        console.log(this.nome + " interage com " + outraPessoa.nome);
    }

    public getNome()
    {
        return this.nome;
    }
}

class Crianca extends Pessoa
{
    public constructor(nome: string){super(nome);}

    public interage(outraPessoa: Pessoa)
    {
        console.log(this.nome + " brinca com " + outraPessoa.getNome());
    }
}

class Adulto extends Pessoa
{
    public constructor(nome: string){super(nome);}

    public interage(outraPessoa: Pessoa)
    {
        console.log(this.nome + " interage com " + outraPessoa.getNome());
    }
}

class Idoso extends Pessoa
{
    public constructor(nome: string){super(nome);}

    public interage(outraPessoa: Pessoa)
    {
        console.log(this.nome + " transmite sabedoria a  " + outraPessoa.getNome());
    }
}

let p1 = new Crianca("João");
let p2 = new Adulto("Adalberto");
let p3 = new Idoso("Cleidiane");

p1.interage(p2);
p2.interage(p3);
p3.interage(p2);
p1.interage(p3);