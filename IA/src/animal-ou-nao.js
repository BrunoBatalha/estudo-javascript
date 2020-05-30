const { Layer, Network } = require('synaptic');

const entrada = new Layer(2);
const oculta = new Layer(3);
const saida = new Layer(1);

entrada.project(oculta);
oculta.project(saida);

const rede = new Network({
    input: entrada,
    hidden: [oculta],
    output: saida
});

const taxaDeAprendizado = .3;

const QUATRO_PATAS = 1;
const DUAS_PATAS = 0;
const MUITO_PELO = 1;
const SEM_PELO = 0;

// treinando
// animal = 1, nao-animal = 0
for (let i = 0; i < 20000; i++) {

    rede.activate([QUATRO_PATAS, MUITO_PELO]);
    rede.propagate(taxaDeAprendizado, [1]);

    rede.activate([QUATRO_PATAS, SEM_PELO]);
    rede.propagate(taxaDeAprendizado, [0]);

    rede.activate([DUAS_PATAS, MUITO_PELO]);
    rede.propagate(taxaDeAprendizado, [0])

    rede.activate([DUAS_PATAS, SEM_PELO]);
    rede.propagate(taxaDeAprendizado, [0]);

}

console.log(rede.activate([QUATRO_PATAS, MUITO_PELO]) * 100+' %');
console.log(rede.activate([QUATRO_PATAS, SEM_PELO]) * 100+' %');
//console.log(rede.activate([PAPEL,TESOURA]))