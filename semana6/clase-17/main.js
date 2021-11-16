// STRING
const cadena = "       sebastian                           yaya       ";

console.log("longitud", cadena.length);
console.log("concat", cadena.concat(" yabiku"));
console.log("includes", cadena.includes("sebastian"));
console.log("endsWith", cadena.endsWith("ian"));
console.log("startsWith", cadena.startsWith("se"));
console.log("indexOf", cadena.indexOf("a"));
console.log("lastIndexOf", cadena.lastIndexOf("n"));
console.log("replace", cadena.replace("sebastian", "jose"));
console.log("slice", cadena.slice(2, 4));
console.log("split", cadena.split("b"));
console.log("toLowerCase", cadena.toLowerCase());
console.log("toUpperCase", cadena.toUpperCase());
console.log("trim", cadena.trim());

//array
console.log("ARRAY");
const num = [0, 1, 2, 3, 4, 5, 6];
const num2 = [7, 8, 9];

console.log("length", num.length);
console.log("isArray", Array.isArray(num));
console.log("Array of", Array.of("miguel"));
console.log("concat", num.concat(num2));
console.log("includes", num.includes(0));
console.log("indexof", num.indexOf(1));
console.log("join", num.join("/"));
console.log("keys", num.keys().next());
console.log("lastIndexof()", num.lastIndexOf(10));
console.log("reverse()", num.reverse());
console.log("shift", num.shift()); //elimina el primer elemento
console.log("slice()", [0, 1, 2, 3, 4].slice(1, 3)); //elimina
const spliceVar = [0, 1, 2, 3, 4];

console.log("splice()", spliceVar.splice(1, 1)); //elimina y agrega (1, 0, 30) en el index 1 no hagas nada y agrega despues 30
console.log("splceVar()", spliceVar); //modificas desde la fuente
console.log("unshift()", num.unshift()); //agrega
console.log("push", num.push(2)); //agrega
console.log("pop()", num.pop(2)); //elmiina el ultimo

const alumnos = [
  {
    name: "miguel",
    age: 23,
    sex: "m",
  },
  {
    name: "jose",
    age: 35,
    sex: "m",
  },
  {
    name: "marlene",
    age: 34,
    sex: "f",
  },
];

//MAP similar a un for
const alumnosFullData = alumnos.map((alumno) => {
  return {
    ...alumno,
    grade: "5",
    school: "tupac amru ii",
  };
});

console.log("alumnos", alumnos);
console.log("alumnos full data", alumnosFullData);

//FILTER
const alumnosMayores30 = alumnos.filter((alumno) => alumno.age > 30); //arrow no requiere un return
console.log("alumnos mayores de 30", alumnosMayores30);
console.log("alumnos", alumnos);

//FIND
const alumnoMiguel = alumnos.find((alumno) => alumno.name === "miguel");
console.log(alumnoMiguel);

//FIND INDEX
const alumnoMiguelPos = alumnos.findIndex((alumno) => alumno.name === "miguel");
console.log("Posicion de miguel", alumnoMiguelPos);

//some
const existMayor30 = alumnos.some((alumno) => alumno.age > 30);
console.log("existe mayor de 30", existMayor30);

//every
const todosMayores30 = alumnos.every((alumno) => alumno.age > 30);
console.log("todos son mayores de 30 ", todosMayores30);

//REDUCE
const numeros = [0, 1, 2, 3, 4, 5, 6];
const resutado = numeros.reduce((acumulado, valorActual, indice, array) => {
  console.log("acumulado", acumulado);
  console.log("valorActual", valorActual);
  return acumulado + valorActual;
}, 0);
