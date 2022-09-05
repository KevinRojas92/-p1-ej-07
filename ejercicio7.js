"use strict";

let numero1, numero2, resultado;

function obtenerNumero1() {
    do {
        numero1 = parseFloat(prompt("Ingresa un número"));

        if (isNaN(numero1)){
            alert("Por favor ingrese un número");
        }
    } while (isNaN(numero1));

    return numero1;
}

function obtenerNumero2() {
    do {
        numero2 = parseFloat(prompt("Ingresa un número"));

        if (isNaN(numero2)){
            alert("Por favor ingrese un número");
        }
    } while (isNaN(numero2));

    return numero2;
}

function operacion(operacion) {
    switch (operacion){
        case 'sumar':
            sumar(numero1, numero2);
            break;
        case 'restar':
            restar(numero1, numero2);
            break;
        case 'multiplicar':
            multiplicar(numero1, numero2);
            break;
        case 'dividir':
            dividir(numero1, numero2);
            break;
        default:
            break;
    }
}

function sumar(numero1, numero2) {
    resultado = numero1 + numero2;

    return resultado;
}

function restar(numero1, numero2) {
    resultado = numero1 - numero2;

    return resultado;
}

function multiplicar(numero1, numero2) {
    resultado = numero1 * numero2;

    return resultado;
}

function dividir(numero1, numero2) {
    resultado = numero1 / numero2;

    return resultado;
}

function mostrar() {
    alert(resultado);
}