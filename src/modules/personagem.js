export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }


    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    get level() {
        return this.#level;
    }

    set level (novoLevel){
        if(novoLevel >= 1 && novoLevel <= 10) this.#level = novoLevel;
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) return 'Empate!!!'
        else if (personagem1.level > personagem2.level) return personagem1.nome + ' venceu a batalha'
        else if (personagem1.level < personagem2.level) return personagem2.nome + ' venceu a batalha'
        else return 'Não foi possível calcular o resultado';
    }
}