class Moeda
{
    private resultado: string;

    public constructor()
    {
        let valor: number = Math.random();
        if(valor < 0.5)
        {
            this.resultado = "cara";
        }
        else
        {
            this.resultado = "coroa"
        }
    }

    public getResultado() //método tipo get (retorna valor de um atributo)
    {
        return this.resultado;
    }

    public setResultado(novoResultado: string) //método tipo set (altera o valor de um atributo)
    {
        if(novoResultado != "cara" && novoResultado != "coroa")
        {
            console.log("Dado inválido. Informar cara ou coroa.")
        }
        else
        {
            this.resultado = novoResultado;
        }
    }
}

let m1: Moeda = new Moeda();
m1.setResultado("cara"); //vai dar erro
console.log(m1.getResultado());
