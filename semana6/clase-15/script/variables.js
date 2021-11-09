/*variables: let y const

let --> se puede cambiar de valor
const --> es para un valor que nunca va a cambiar

*/
let user = "miguel";
console.log(name);
name = "pablo";
console.log(name);

const Pi = 3.14;
// y si se trata de renombrar a este tipo de variable dara error

//tipado dinamico
//hay 7 tipos de datos
let account = null; // tipo nulo
let married; // tipo undefined
let hash = Symbol("12345"); // Symbol -- valor unico
let alumno = {
  sexo: "m",
  edad: 23,
  grado: 5,
}; // tipo objeto

//PARA SABER QUE TIPO DE DATO ES: TYPEOF
console.log(typeof user);

//CAMBIAR TIPOS DE DATOS
let age2 = 30;
console.log(typeof String(age2)); //convirtio a string

//(tipo_dato).prototype muestra las funciones que se pueden realizar (se escribe en la consola)

//SCOPE O ALCANCE
function sayHello() {
  let nombre = "miguel";
  let age = 23;
}
// estos variables solo estan vivos dentro de la funcion
