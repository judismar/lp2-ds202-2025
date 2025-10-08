class Pagamento
{
    public constructor(private valor: number, private tipoPagamento: string = "dinheiro"){}

    public efetuaPagamento(): boolean;
    public efetuaPagamento(empresa: string): boolean;

    public efetuaPagamento(empresa?: string): boolean
    {
        if(empresa !== undefined)
        {
            console.log("Pagamento eftuado para a empresa ", empresa);
            return true;
        }
        else
        {
            console.log("Pagamento para quem?");
            return true;
        }
    }
}
