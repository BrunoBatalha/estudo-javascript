const { Layer, Network } = require('synaptic');

// criando camadas
const inputLayer = new Layer(2);
const hiddenLayer = new Layer(3);
const outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

//criando nova rede
const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

//treinando rede para resolver equacao XOR
const learningRate = .3;

for (let i = 0; i < 20000; i++) {
    //0, 0 => 0
    myNetwork.activate([0, 0]);
    myNetwork.propagate(learningRate, [0]);

    //0, 1 => 1
    myNetwork.activate([0, 1]);
    myNetwork.propagate(learningRate, [1]);

    //1, 0 => 1
    myNetwork.activate([1, 0]);
    myNetwork.propagate(learningRate, [1]);

    //1, 1 => 0
    myNetwork.activate([1, 1]);
    myNetwork.propagate(learningRate, [0]);

}

console.log(myNetwork.activate([0, 0]));
// -> [0.015020775950893527]
console.log(myNetwork.activate([0, 1]));
//->[0.9815816381088985]
console.log(myNetwork.activate([1, 0]));
//-> [0.9871822457132193]
console.log(myNetwork.activate([1, 1]));
//-> [0.012950087641929467]

