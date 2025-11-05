class Trabalhador
{
    constructor(
        public nome: string,
        public salario: number = 3000
    )
	{
        if(salario < 3000)
            throw Error("Salário mixuruca!");
    }
}
let erro = '';

let nome = String(prompt("Informe seu nome: "));
if(nome === "null" || nome === "")
{
    erro = erro || "Nome inválido.";
}
let salario = Number(prompt("Informe seu salário: "));

try
{
    var t = new Trabalhador(nome, salario);
}
catch(e)
{
    erro = erro || "Salário abaixo de 3000";
}

if(erro === '')
{
    console.log(t);
}
else
{
    console.log(erro);
}
