class Trabalhador
{
    //Atributo de classe (versus atributo de instância, visto até agora): static
    public static readonly SALARIO_MINIMO: number = 1518.00;
    private nome: string;
    private salario: number;

    public constructor(nome: string, salario: number = Trabalhador.SALARIO_MINIMO)
    {
        this.nome = nome;
        this.salario = salario;
        if(salario < Trabalhador.SALARIO_MINIMO)
        {
            this.salario = Trabalhador.SALARIO_MINIMO
        }
    }

    //Método de classe: static
    //Neste caso, não precisamos. TRABALHO_MINIMO é public.
    /*public static getSalarioMinimo()
    {
        return Trabalhador.SALARIO_MINIMO;
    }*/
}

let t = new Trabalhador("Judis");
