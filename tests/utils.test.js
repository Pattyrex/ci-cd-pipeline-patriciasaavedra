import { suma, resta, multiplicar, dividir } from '../src/utils.js';

describe('Funciones de cálculo', () => {
  test('suma correctamente', () => {
    expect(suma(3, 5)).toBe(8);
  });

  test('resta correctamente', () => {
    expect(resta(10, 4)).toBe(6);
  });

  test('multiplica correctamente', () => {
    expect(multiplicar(6, 7)).toBe(42);
  });

  test('divide correctamente', () => {
    expect(dividir(20, 4)).toBe(5);
  });

  test('divide lanza error al dividir por cero', () => {
    expect(() => dividir(5, 0)).toThrow('División por cero');
  });
});
