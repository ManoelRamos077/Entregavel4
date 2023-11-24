const somatorio = require('../Codigos/Somatorio'); 

test('calcula o somatório de um conjunto numérico', () => {
  const conjuntoNumerico = [1, 2, 7, 4, 5];
  expect(somatorio(conjuntoNumerico)).toBe(19); // 1+2+7+4+5 = 19
});

test('calcula o somatório de um conjunto numérico com números negativos', () => {
  const conjuntoNumerico = [-1, -2, -3, -4, -5];
  expect(somatorio(conjuntoNumerico)).toBe(-15); // -1-2-3-4-5 = -15
});