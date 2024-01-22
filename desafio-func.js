let userRank = rank(85, 32)
let lvl = "Ouro"

console.log("O Herói tem de saldo de " + userRank + " vitórias e está no nível de " + lvl) 

function rank(victories, loses){
	let actualRank = victories - loses
    return actualRank  
}