class Heroi {
    constructor ( nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    atacar (){
      switch (this.tipo) {
        case "mago":
          return `O heroi ${this.nome} do tipo ${this.tipo} usou magia.`
        case "guerreiro":
          return `O heroi ${this.nome} do tipo ${this.tipo} usou sua espada.`
        case "monge": 
        return `O heroi ${this.nome} do tipo ${this.tipo} usou artes marciais.`
        case "ninja":
          return `O heroi ${this.nome} do tipo ${this.tipo} usou shuriken.`
        default:
          break;
      }
    }
  }
  const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 1200, "mago");
  const heroi3 = new Heroi("Bruce Lee", 32, "monge");
  const heroi4 = new Heroi("Hanzo", 28, "ninja");
  
  console.log(heroi1.atacar());
  console.log(heroi2.atacar());
  console.log(heroi3.atacar());
  console.log(heroi4.atacar());