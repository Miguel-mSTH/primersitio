/*CREAR 5 FUNCIONES QUE RETORNE LA SUMA DE 2 VALORES CON LOS SIGUIENTE OPERADORES ARITMETICOS 
funcion suma, resta, multiplicacion, division, potencia*/

/*
Crear un procedimiento donde se pidan 2 valores y estos se les pase a cada una de las funciones, tambien imprimir el resultado de las funciones */

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function potencia(a, b) {
  return a ** b;
}

console.log("La suma es ", sumar(5, 2));
console.log("La resta es ", restar(5, 2));
console.log("La multiplicacion es ", multiplicar(5, 2));
console.log("La division es ", dividir(5, 2));
console.log("La potencia es ", potencia(5, 4));

(function () {
  function calculadora() {
    let a = parseFloat(prompt("Ingrese un numero"));
    let b = parseFloat(prompt("Ingrese otro numero"));

    console.log("La suma en el PROCEDIMIENTO es ", sumar(a, b));
    console.log("La resta en el PROCEDIMIENTO es ", restar(a, b));
    console.log("La multiplicacion en el PROCEDIMIENTO es ", multiplicar(a, b));
    console.log("La dividision en el PROCEDIMIENTO es ", dividir(a, b));
    console.log("La potencia en el PROCEDIMIENTO es ", potencia(a, b));
  }
  calculadora();
})();
