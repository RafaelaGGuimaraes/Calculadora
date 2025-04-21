class Calculadora {
    soma(lista){
        const total = lista.reduce(
        (acc, atual) => acc + atual, 0,
        );
        return total;
    }
    subtração(lista){
        const total = lista.reduce(
        (acc, atual) => acc - atual,
        );
        return total;
    }
    multiplicação(lista){
        const total = lista.reduce(
        (acc, atual) => acc * atual,
        );
        return total;
    }
    divisão(lista){
        const divisores = lista.slice(1);
        if (divisores.includes(0)){
            throw new Error('Não é possível dividir por zero');
        }
        const total = lista.reduce(
        (acc, atual) => acc / atual,
        );
        return total;
    }
    potenciação(lista){
        const total = lista.reduce(
        (acc, atual) => acc ** atual,
        );
        return total;
    }
}

export default Calculadora;