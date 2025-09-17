//Classe FormaGeometrica é abstrata: NÃO PODE SER INSTANCIADA!!!!!
abstract class FormaGeometrica
{
    private static readonly PI = Math.PI;

    public static getPi(): number
    {
        return FormaGeometrica.PI;
    }

    //Métodos abstratos: serão implementados na subclasse.
    //Aqui temos apenas um protótipo com a assinatura de cada método.
    public abstract perimetro(): number;
    public abstract area(): number;
}
class Retangulo extends FormaGeometrica
{
    private altura: number;
    private base: number;

    public constructor(altura: number, base: number)
    {
        super();
        this.base = base;
        this.altura = altura;
    }

    //Implementando os métodos abstratos (se tornam concretos):
    public perimetro(): number
    {
        return this.base*2 + this.altura*2;
    }

    public area(): number
    {
        return this.base*this.altura;
    }
}

class Circulo extends FormaGeometrica
{
    private raio: number;

    public constructor(r: number)
    {
        super();
        this.raio = r;
    }

    public perimetro(): number
    {
        return 2*this.raio*FormaGeometrica.getPi();
    }

    public area(): number
    {
        return Math.PI*Math.pow(this.raio, 2);
    }
}

//Polimorfismo: sobrescrita de métodos, sobrecarga de métodos, capacidade de uma variável de supertipo receber um valor de subtipo etc.
//Poli (muitos) + morfus (forma)
let a: FormaGeometrica[] = [];
a.push(new Retangulo(1, 1));
a.push(new Retangulo(1, 6));
a.push(new Circulo(3));
