const verificaPrimo = require('../Codigos/NumPrimo'); 

test('verifica se 13 é um número primo', () => {
  expect(verificaPrimo(13)).toBe(true);
});

test('verifica se 14 não é um número primo', () => {
  expect(verificaPrimo(14)).toBe(false);
});