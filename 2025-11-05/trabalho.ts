//Dúvidas no código? Favor perguntar que explico!

class Trabalhador
{
    constructor(
        public nome: string,
        public salario: number = 3000
    )
	{
        this.salario = salario < 3000 ? 3000 : salario; //Operador ternário. Leiam assim: "this.salario recebe 3000 SE salario < 3000; SENÃO, this.salario recebe salario.
    }
}

class FuncionarioBancario extends Trabalhador
{
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000
    )
	{
        super(nome, salario);
    }
}

class Faxineiro extends FuncionarioBancario
{
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000,
        public turno: string = "manhã" //turno pode ser manhã, tarde ou noite
    )
	{
        super(nome, cpf, salario);
    }

    public atualizaTurno(novoTurno: string): void 
	{
        if(novoTurno != "manhã" && novoTurno != "tarde" && novoTurno != "noite")
		{
			throw new Error("Turno inválido");
		}
		else
		{
			this.turno = novoTurno;
		}
    }
}

class Caixa extends FuncionarioBancario
{
	//Nada novo, mas herda TUDO
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000
    )
	{
        super(nome, cpf, salario);
    }
}
