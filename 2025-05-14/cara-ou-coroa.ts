//Cara: 0
//Coroa: 1

function lancaMoeda(jogador: number)
{
    //Math.random()
    let jogadora: number;
    jogadora = Math.random();
    let s: string;
    s = "";

    if(jogadora <= 0.5)
    {
        s += "O resultado foi cara.";
        jogadora = 0;
    }
    else
    {
        s += "O resultado foi coroa.";
        jogadora = 1;
    }

    if(jogador == jogadora)
    {
        s += " Você venceu!!!"
    }
    else
    {
        s += " Você perdeu! :("
    }

    document.getElementById("saida").innerHTML = s;
}