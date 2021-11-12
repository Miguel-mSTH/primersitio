import { sumaModule } from "./operations.js";
console.log(sumaModule(3, 4));

function fn(a, b) {
  //function declarativa
  return a + b;
}

const fnArrow = (a, b) => a + b; //Arrow function no tiene this (si esta declarado uno dentro del arrow se va al anterior fucntion declarativa)

console.log(fn(2, 3));

console.log(fnArrow(3, 4));

//parametros por defecto
function getData(name = "miguel", lastname = "espinoza", age = 23) {
  return `${name} ${lastname} ${age}`;
}
//parametros rest
function suma(a, b, ...c) {
  let resultado = a + b;

  c.forEach((n) => {
    resultado = resultado + n;
  });

  return resultado;
}
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//spreed operator
const datos = ["hola", "como", "estas", "miguel"];
console.log(...datos);

function limpiarEspacios(...cadenas) {
  for (let i = 0; i < cadenas.length; i++) {
    cadenas[i] = cadenas[i].trim(); //trim limpia los espacios en blanco
  }
  return cadenas;
}

const cadenasCol = ["hola ", " algo ", "mas ", "dadsad "];

let cadenasLimpiad = limpiarEspacios(...cadenasCol);
console.log(cadenasLimpiad);

const col = [0, 1, 2, 3, 4];
const col2 = [...col, 5, 61]; //... es espreed operator

console.log("col", col);
console.log("col2", col2);

const obj = {
  name: "miguel",
  lastname: "espinoza",
};
const obj2 = {
  ...obj,
  age: 23,
};

console.log("obj", obj);
console.log("obj2", obj2);

//OBJECTS
function UserObject(name = "miguel", lastname = "espinoza", age = 23) {
  return {
    name,
    lastname, //anteriormente se declaraba name:name(tenian q ser iguales)
    age,
  };
}
//const user={
//    name: 'miguel',
//   lastname:'espinoza', --> esta la anterior forma
//  age:23
// }
const user = UserObject("miguel", "espinoza", 23);
const user2 = UserObject("pablo", "espinoza", 31);

//Metodos concisos
const obj3 = {
  fn: function () {
    console.log(this); //antiguo
  },
};

obj3.fn();

const obj4 = {
  fn() {
    console.log(this); //nuevo fn(hace referencia a un nombre cualquiera)
  },
};
obj4.fn();

//COPIAR OBJETOS CON ERROR(solo con objectos)
let valorUno = "miguel";
let valorDos = valorUno;
valorUno = "Jose";

console.log("valorDos", valorDos); //miguel
console.log("valorUNo", valorUno); //jose

let objOriginal = {
  name: "miguel",
};

let objCopia = objOriginal;
objOriginal.name = "jose";

console.log(objCopia.name); //jose
console.log(objOriginal.name); //jose

//copia objetos de manera correcta
let objOriginal2 = {
  name: "miguel",
};

//let objCopia2 = Object.assign({}, objOriginal2); primera manera
let objCopia2 = { ...objOriginal2 };
objOriginal2.name = "jose";

console.log(objCopia2.name); //sebastian
console.log(objOriginal2.name); //jose

//DESTRUCTURING
const objDes = {
  name: "miguel",
  lastname: "espinoza",
  age: 23,
  data: {
    address: "siempre viva",
    url: "wwww.google.com",
  },
};

let {
  name,
  lastname,
  age,
  data: { address, url: urlcambiado },
} = objDes;

console.log(name);
console.log(lastname);
console.log(address);
console.log(urlcambiado);

//DESCTURCTURING array
const arr = [0, 14, 3, 4, 5, 6];
const arr2 = [...arr];

console.log("arr2", arr2);
arr.push(5);
console.log("arr", arr);
console.log("arr2", arr2);

let [firstNumber, secondNumber, , , , six] = arr;

console.log(firstNumber);
console.log(secondNumber);
console.log(six);
