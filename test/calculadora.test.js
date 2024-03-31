const {soma} = require("../src/calculadora");

    test ('soma de parametros',() => {
    expect(soma(80,9)).toBe(89);
    });