function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 3)); //5
console.log(sumar(10, 3)); //13

//esta fue una funcion pura el cual es altamente retornable

//esto es un procedimiento simplimente ejecutan
function calculator() {
  let a = parseFloat(prompt("Ingresa el primer numero")); // parseFloat es para convertir a tipo number pero tambien los descimales
  let b = parseFloat(prompt("Ingrese el segundo numero")); // prompt es para pedir que ingrse dato al usuario

  console.log("sumar a + b =", sumar(a, b));
}

calculator();

//para proteger la funcion global tendrias ponerlo como autoejecutable (en un contexto)
/* (function(){
aqui va la funtion, todo desde function sumar(){}
})(); */
