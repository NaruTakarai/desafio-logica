class novoHeroi {
    constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
  }
  
  let heroiMago = new novoHeroi("Gandalf", 506, "mago")
  let heroiMonge = new novoHeroi("Aang", 12, "monge")
  
  function atacouCom(heroi) {
    let ataque
  
    if (heroi.tipo == "mago") {
      ataque = "bola de fogo"
    } else if (heroi.tipo == "guerreiro") {
      ataque = "espada longa"
    } else if (heroi.tipo == "monge") {
      ataque = "artes marciais"
    } else if (heroi.tipo == "ninja") {
      ataque = "ninjutsu"
    }
  
    return ataque
  }
  
  console.log(`O ${heroiMago.tipo} atacou usando ${atacouCom(heroiMago)}`)
  console.log(`O ${heroiMonge.tipo} atacou usando ${atacouCom(heroiMonge)}`)    
