import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js"; 
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";


const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10);
const arqueiroGabriel = new Arqueiro('Gabriel', 55, 20);
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8);

const personagens = [magoAntonio, magaJulia, arqueiroGabriel, arqueiroMagoChico];

new PersonagemView(personagens).render();
