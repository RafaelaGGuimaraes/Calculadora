import { expect } from 'chai';
import Calculadora from '../app/Calculadora.js';
// import { soma } from '../app/Calculadora.js';

describe('Descrição do grupo de testes de soma', () => {
    it('deve somar dois números', () => {
        const calc = new Calculadora();
        const resultado = calc.soma([3, 2]);
        expect(resultado).to.equal(5);
    })
    it('deve somar com um número negativo', () => {
        const calc = new Calculadora();
        const resultado = calc.soma([3, -2]);
        expect(resultado).to.equal(1);
    })
    it('deve somar com números negativos', () => {
        const calc = new Calculadora();
        const resultado = calc.soma([-3, -2]);
        expect(resultado).to.equal(-5);
    })
    it('deve somar números decimais', () => {
        const calc = new Calculadora();
        const resultado = calc.soma([3.1, 2.1]);
        expect(resultado).to.equal(5.2);
    })
    it('deve somar três números positivos', () => {
        const calc = new Calculadora();
        const resultado = calc.soma([3, 2, 2]);
        expect(resultado).to.equal(7);
    })
})

describe('Descrição do grupo de testes de subtração', () => {
    it('deve subtrair dois números', () => {
        const calc = new Calculadora();
        const resultado = calc.subtração([3, 2]);
        expect(resultado).to.equal(1);
    })
    it('deve subtrair um número negativo', () => {
        const calc = new Calculadora();
        const resultado = calc.subtração([3, -2]);
        expect(resultado).to.equal(5);
    })
    it('deve subtrair entre números negativos', () => {
        const calc = new Calculadora();
        const resultado = calc.subtração([-3, -2]);
        expect(resultado).to.equal(-1);
    })
    it('deve subtrair números decimais', () => {
        const calc = new Calculadora();
        const resultado = calc.subtração([3.2, 2.1]);
        expect(resultado).to.equal(1.1);
    })
    it('deve subtrair três números', () => {
        const calc = new Calculadora();
        const resultado = calc.subtração([4, 2, 1]);
        expect(resultado).to.equal(1);
    })
})

describe('Descrição do grupo de testes de multiplicação', () => {
    it('deve multiplicar dois números', () => {
        const calc = new Calculadora();
        const resultado = calc.multiplicação([3, 2]);
        expect(resultado).to.equal(6);
    })
    it('deve multiplicar por um número negativo', () => {
        const calc = new Calculadora();
        const resultado = calc.multiplicação([3, -2]);
        expect(resultado).to.equal(-6);
    })
    it('deve multiplicar números negativos', () => {
        const calc = new Calculadora();
        const resultado = calc.multiplicação([-3, -2]);
        expect(resultado).to.equal(6);
    })
    it('deve multiplicar três números', () => {
        const calc = new Calculadora();
        const resultado = calc.multiplicação([3, 2, 2]);
        expect(resultado).to.equal(12);
    })
})

describe('Descrição do grupo de testes de divisão', () => {
    it('deve dividir dois números', () => {
        const calc = new Calculadora();
        const resultado = calc.divisão([6, 2]);
        expect(resultado).to.equal(3);
    })
    it('deve dividir por um número negativo', () => {
        const calc = new Calculadora();
        const resultado = calc.divisão([6, -2]);
        expect(resultado).to.equal(-3);
    })
    it('deve dividir números negativos', () => {
        const calc = new Calculadora();
        const resultado = calc.divisão([-6, -2]);
        expect(resultado).to.equal(3);
    })
    it('deve dividir três números', () => {
        const calc = new Calculadora();
        const resultado = calc.divisão([6, 2, 1]);
        expect(resultado).to.equal(3);
    })
    it('deve dividir 0 por outro número', () => {
        const calc = new Calculadora();
        const resultado = calc.divisão([0, 2]);
        expect(resultado).to.equal(0);
    })
    it('deve lançar um erro ao tentar dividir por zero', () => {
        const calc = new Calculadora();
        expect(() => calc.divisão([10, 0])).to.throw('Não é possível dividir por zero');
    });
})

describe('Descrição do grupo de testes de potenciação', () => {
    it('deve elevar um número a outro', () => {
        const calc = new Calculadora();
        const resultado = calc.potenciação([3, 2]);
        expect(resultado).to.equal(9);
    })
    it('deve elevar um número a 0', () => {
        const calc = new Calculadora();
        const resultado = calc.potenciação([3, 0]);
        expect(resultado).to.equal(1);
    })
    it('deve elevar um número a outro negativo', () => {
        const calc = new Calculadora();
        const resultado = calc.potenciação([2, -2]);
        expect(resultado).to.equal(0.25);
    })
    it('deve elevar um número duas vezes', () => {
        const calc = new Calculadora();
        const resultado = calc.potenciação([2, 2, 2]);
        expect(resultado).to.equal(16);
    })
})