//Solução 1, 3 e 5

class Estacionamento
{
    private lv: Veiculo[] = [];

    public retornaVeiculoPorPlaca(placa: string)
    {
        for(let veiculo of this.lv)
        {
            if(veiculo.placa == placa)
            {
                return veiculo
            }
        }
        return null;
    }

    public imprimePlacasDeErick()
    {
        for(let veiculo of this.lv)
        {
            if(veiculo.dono != null && veiculo.dono.nome == "Erick")
            {
                console.log(veiculo.placa);
            }
        }
        return null;
    }
}
//usando os métodos, mas sem instanciar estacionamento
let v: Veiculo = e.retornaVeiculoPorPlaca("abc")
