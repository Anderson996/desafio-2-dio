//Total de vitórias e derrotas
let totalWin = winningCounter(80 , 5)

//Ranques possíveis
let rank = ["ferro" , "bronze" , "prata" , "ouro" , "diamante" , "lendário" , "imortal"]

//Função de contabilização de vitórias e derrotas (vai ficar aqui!!)
function winningCounter(win , loss){
    let average = win - loss
    return average
}

//Vitórias por ranque
if(totalWin <= 10){
    rank = rank[0]
}
else if(totalWin > 10 && totalWin <= 20){
    rank = rank[1]
}
else if(totalWin > 20 && totalWin <= 50){
    rank = rank[2]
}
else if(totalWin > 50 && totalWin <= 80){
    rank = rank[3]
}
else if(totalWin > 80 && totalWin <= 90){
    rank = rank[4]
}
else if(totalWin > 90 && totalWin <= 100){
    rank = rank[5]
}
else if(totalWin > 100){
    rank = rank[6]
}

//Saída
console.log(`O herói tem saldo de ${totalWin} partidas e está no nível ${rank}`)