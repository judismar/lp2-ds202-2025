//Cara: 0
//Coroa: 1
let jogador: number;
jogador = 0;

//Math.random()
let jogadora: number;
jogadora = Math.random();

if(jogadora <= 0.5)
{
    console.log("O resultado foi cara");
    jogadora = 0;
}
else
{
    console.log("O resultado foi coroa");
    jogadora = 1;
}

if(jogador == jogadora)
{
    console.log("Você venceu!!!")
}
else
{
    console.log("Você perdeu! :(")
}