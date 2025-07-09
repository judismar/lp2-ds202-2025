class Trabalhador
{
    //Assinatura do método (ou da função, se fora de classe): nome, parâmetros e tipo de retorno.
    //Valores padrão: automáticos, se não informados como argumento.
    public trabalha(empresa: string = "indefinida"): void
    {
        console.log("Empresa: " + empresa);
    }
}

class Funcionario extends Trabalhador
{
    private salario: number;
    private cargo: string;

    public constructor(cargo: string, sal = 3000)
    {
        super();
        this.cargo = cargo;
        this.salario = sal;
    }
    //Sobrescrita de método
    public trabalha(empresa: string): void
    {
        console.log("Funcionário da " + empresa);
    }
}

let t1: Trabalhador = new Trabalhador();
t1.trabalha();
t1.trabalha("cp2");

let t2: Trabalhador = new Funcionario("Atendente");
console.log(t2);
