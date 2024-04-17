var historico = {nome: "Jonas", vitorias: 109, derrotas: 8}
var saldo = (historico.vitorias - historico.derrotas)
var nivel 

if (saldo < 10){
    nivel = "Ferro"
}
else if(saldo > 10 && saldo <= 20){
    nivel = "Bronze"
}
else if(saldo > 20 && saldo <= 50){
    nivel = "Prata"
}
else if(saldo > 50 && saldo <= 80){
    nivel = "Ouro"
}
else if(saldo > 80 && saldo <= 90){
    nivel = "Diamante"
}
else if(saldo > 90 && saldo <= 100){
    nivel = "Lendário"
}
else if(saldo > 100){
    nivel = "Imortal"
}


console.log(`O Herói de nome ${historico.nome} tem saldo de ${saldo} e está no nivel ${nivel}.`)

