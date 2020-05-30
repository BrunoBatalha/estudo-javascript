const paises = ['Brasil', 'Bélgica', 'Argentina', 'China', 'Dinamarca', 'Estados Unidos'];

// Map
// tudo vai pro novo array
const concatenaStrPais = paises.map(function (valor) {
    return 'País: ' + valor;
});

// Filter
// se for TRUE vai pro novo array
// se for FALSE não vai pro novo array

const comecaComB = paises.filter(function (valor) {
    if (valor[0].toUpperCase() === 'B') {
        return valor;
    }
});

// Map fazendo papel de Filter
const retornaComB = paises.map(function (valor) {
    if (valor[0].toUpperCase() === 'B') {
        return valor;
    }
});

// Reduce
const concatenaTudoEmUmString = paises.reduce(function (acumulador, valor) {
    return acumulador + ', ' + valor;
});

// For fazendo papel de Filter
const paisesComB = [];
for (let i = 0; i < paises.length; i++) {
    if (paises[i][0].toUpperCase() === 'B') {
        paisesComB.push(paises[i]);
    }
}

console.log('\nMAP\n', concatenaStrPais);
console.log('\nFILTER', comecaComB);
console.log('\nMAP fazendo papel de FILTER\n', retornaComB);
console.log('\nREDUCE\n', concatenaTudoEmUmString);

console.log('\nFOR fazendo papel de FILTER\n', paisesComB);
