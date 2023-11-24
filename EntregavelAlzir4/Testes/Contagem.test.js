const contarInteirosNoIntervalo = require('../Codigos/Contagem'); 

test('conta inteiros no intervalo de 3 a 10', () => {
  const conjuntoDeDados = [2, 4, 6, 8, 10, 3.5, 7, 9];
  expect(contarInteirosNoIntervalo(3, 10, conjuntoDeDados)).toBe(6); 
});

test('conta inteiros no intervalo de 0 a 5', () => {
  const conjuntoDeDados = [1, 2.2, 3, 4.5, 5, -1, 0];
  expect(contarInteirosNoIntervalo(0, 5, conjuntoDeDados)).toBe(4); 
});
