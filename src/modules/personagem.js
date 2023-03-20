export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsignia() {
        if (this.level >= 5){
            return `Implac�vel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if (personagem1.level === personagem2.level) return 'Empate!!!'
        else if (personagem1.level > personagem2.level) return personagem1.nome + ' venceu a batalha'
        else if (personagem1.level < personagem2.level) return personagem2.nome + ' venceu a batalha'
        else return 'N�o foi poss�vel calcular o resultado';
    }
}