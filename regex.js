const str = 'Meu nome é Bruno Batalha';
let regex;
// "i" não diferencia maiúsculas de minúsculas
regex = /bruno batalha/i;
console.log(str.search(regex));

// "g" pesquisa global
regex = /B/g;
console.log(str.replace(regex,'H'));

// "|" = ou
// "[A-Z]" = entre A e Z (tem diferença maiúscula e minúscula)
// "[ABC]" = procura "ABC"
// "n+" = qualquer string que contenha pelo menos um n
regex = /([a-z]|[A-Z])(a+)/g;
console.log(str.match(regex));

