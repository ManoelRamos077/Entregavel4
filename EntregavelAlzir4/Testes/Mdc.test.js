const calcularMDC = require('../Codigos/Mdc'); 

test('encontra o MDC de 100 e 30', () => {
  expect(calcularMDC(100, 30)).toBe(10); // O MDC de 100 e 30 é 10
});

test('encontra o MDC de 17 e 13, que são primos entre si', () => {
  expect(calcularMDC(17, 13)).toBe(1); // O MDC de dois números primos entre si é 1
});