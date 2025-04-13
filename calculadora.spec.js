import { expect } from 'chai';
import Calculadora from '../app/Calculadora.js';

describe('Calculadora', () => {
  it('deve somar dois números corretamente', () => {
    const calc = new Calculadora();
    const resultado = calc.somar(3, 2);
    expect(resultado).to.equal(5);
  });
  it('deve subtrair dois números corretamente', () => {
    const calc = new Calculadora();
    const resultado = calc.subtrair(5, 2);
    expect(resultado).to.equal(3);
  });
  it('deve multiplicar dois números corretamente', () => {
    const calc = new Calculadora();
    const resultado = calc.multiplicar(5, 2);
    expect(resultado).to.equal(10);
  });
  it('deve dividir dois números corretamente', () => {
    const calc = new Calculadora();
    const resultado = calc.dividir(6, 2);
    expect(resultado).to.equal(3);
  });
  it('deve lançar um erro ao tentar dividir por zero', () => {
    const calc = new Calculadora();
    expect(() => calc.dividir(10, 0)).to.throw('Não é possível dividir por zero');
  });
  it('deve somar corretamente com números negativos', () => {
    const calc = new Calculadora();
    const resultado = calc.somar(-5, 3);
    expect(resultado).to.equal(-2);
  });
  it('deve subtrair corretamente com números negativos', () => {
    const calc = new Calculadora();
    const resultado = calc.subtrair(-5, -3);
    expect(resultado).to.equal(-2);
  })
  it('deve multiplicar corretamente com números negativos', () => {
    const calc = new Calculadora();
    const resultado = calc.multiplicar(-2, 4);
    expect(resultado).to.equal(-8);
  });
  it('deve dividir corretamente com números negativos', () => {
    const calc = new Calculadora();
    const resultado = calc.dividir(-10, 2);
    expect(resultado).to.equal(-5);
  });
  it('deve somar corretamente números decimais', () => {
    const calc = new Calculadora();
    const resultado = calc.somar(1.5, 2.3);
    expect(resultado).to.equal(3.8);
  });
  it('deve multiplicar corretamente números decimais', () => {
    const calc = new Calculadora();
    const resultado = calc.multiplicar(0.5, 2.4);
    expect(resultado).to.equal(1.2);
  });
  it('deve dividir corretamente números decimais', () => {
    const calc = new Calculadora();
    const resultado = calc.dividir(2.4, 0.5);
    expect(resultado).to.equal(4.8);
  });
  it('deve calcular a potência de um número corretamente', () => {
    const calc = new Calculadora();
    const resultado = calc.potenciar(2, 3);
    expect(resultado).to.equal(8);
  });
});