//Declaração de protótipos de funções
function soma(a: number, b: number): number;
function soma(a: string, b: string): string;
function soma(a: any[], b: any[]): any[];

//Implementação
function soma(a: any, b: any): any
{
    if(typeof a === "number" || typeof a === "string")
    {
        return a + b;
    }
    else
    {
        for(let item of b)
        {
            a.push(item);
        }
        return a;
    }
}
