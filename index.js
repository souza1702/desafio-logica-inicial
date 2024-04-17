var heroi = {nome: "Jonas", xp: 2000}
var msg 

if (heroi.xp < 1000){
    msg = "Ferro"
}
else if (heroi.xp > 1001 && heroi.xp <= 2000){
    msg = "Bronze"
}
else if (heroi.xp > 2001 && heroi.xp <= 5000){
    msg = "Prata"
}
else if (heroi.xp > 5001 && heroi.xp <= 7000){
    msg = "Ouro"
}
else if (heroi.xp > 7001 && heroi.xp <= 8000){
    msg = "Platina"
}
else if (heroi.xp > 8001 && heroi.xp <= 9000){
    msg = "Ascendente"
}
else if (heroi.xp > 9001 && heroi.xp <= 10000){
    msg = "Bronze"
}
else if (heroi.xp > 10001){
    msg = "Radiante"
}
else {
    msg = "Erro inesperado. Por favor, altere o valor do xp do seu herói."
}
console.log(`O Herói de nome ${heroi.nome} está no nível de ${msg}.`);
