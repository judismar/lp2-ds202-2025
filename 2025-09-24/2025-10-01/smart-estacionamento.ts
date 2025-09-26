//Código base para o trabalho: classes já definidas e prontas para uso!

class Pessoa
{
	constructor(public nome: string, public cpf: string){}
}

abstract class Veiculo
{
	public dono: Pessoa | null;

    public constructor(public placa, dono: Pessoa | null = null
	{
        this.dono = dono;
	}

	public getCpfDono(): string | null
	{
		if(this.dono !== null)
		{
			return this.dono.cpf;
		}
		else
		{
			return null;
		}
    }
}

class Carro extends Veiculo
{
    constructor(placa: string, dono: Pessoa | null = null)
	{
        super(placa, dono);
    }
}

class Moto extends Veiculo
{
    constructor(placa: string, dono: Pessoa | null = null)
	{
        super(placa, dono);
    }
}
