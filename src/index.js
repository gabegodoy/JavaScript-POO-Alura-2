import { Personagem } from "./modules/personagem.js";

// const personagemJose = {
    // nome: 'Jose',
    // vida: 7,
    // mana: 6,
    // level: 3,
    // tipo: 'Arqueiro',
// }



const personagemPedrinho = new Personagem();
personagemPedrinho.nome = 'Pedrinho';
personagemPedrinho.mana = 12;
personagemPedrinho.vida = 7;
personagemPedrinho.level = 5;
personagemPedrinho.tipo = 'Mago';

const personagemJose = new Personagem();
personagemJose.nome = 'José';
personagemJose.mana = 12;
personagemJose.vida = 7;
personagemJose.level = 2;
personagemJose.tipo = 'Arqueiro';

console.log(`Insignia de ${personagemPedrinho.nome}: ${personagemPedrinho.obterInsignia()}`);
console.log(`Insignia de ${personagemJose.nome}: ${personagemJose.obterInsignia()}`);