const quickSort = require('../Codigos/Ordenacao');

test('ordena um array de inteiros positivos', () => {
  const array = [4, 2, 7, 1, 9, 3];
  expect(quickSort(array)).toEqual([1, 2, 3, 4, 7, 9]);
});

test('ordena um array que inclui inteiros negativos e positivos', () => {
  const array = [-3, 4, 1, -5, 0, -2, 8, 1];
  expect(quickSort(array)).toEqual([-5, -3, -2, 0, 1, 1, 4, 8]);
});