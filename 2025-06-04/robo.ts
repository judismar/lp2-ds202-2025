class Robo
{
    private imagem: string;
    private pos: number; //posição

    public constructor(imagem: string, pos: number, mundo: Mundo)
    {
        this.imagem = imagem;
        if(pos >= 0 && pos <= mundo.getTamanho())
        {
            this.pos = pos;
        }
        else
        {
            console.log("Posição inválida. Colocar robô dentro dos limites do Mundo.");
            this.pos = 0;
        }
    }

    public printRobo()
    {
        let s = "";
        for(let k = 0; k < this.pos; k++)
        {
            s += " ";
        }
        s += this.imagem;
        return s;
    }
}

class Mundo
{
    private chao: string;
    public constructor(tamanho: number)
    {
        this.chao = "";
        /*let k = 0;
        while(k < tamanho)
        {
            this.chao += "_"
            k++; //k += 1;
        }*/
        for(let k = 0; k < tamanho; k++)
        {
            this.chao += "_"; 
        }
    }

    public getTamanho()
    {
        return this.chao.length;
    }

    public print(robo: Robo)
    {
        console.log(robo.printRobo());
        console.log(this.chao);
    }
}
