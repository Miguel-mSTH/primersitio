const users = [
  {
    name: "miguel",
    age: 23,
  },
  {
    name: "pablo",
    age: 17,
  },
];

function esMayor(edad) {
  return edad > 30;
}

for (let index = 0; index < users.length; index++) {
  console.log(`index element ${index} ${esMayor(users[index].age)}`);
}

console.log("primer elemento", users[0].age, esMayor(users[0].age));

const number = [
  [0, 1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4],
];

for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
  for (let j = 0; j < number[i].length; j++) {
    console.log("array de array ", number[i][j]);
  }
}

//while

let n = 0;
while (n < 3) {
  n++;
  console.log("hasta que la condicion se cumpla");
}

//do while
//mientras se cumpla una condicion
do {
  console.log("al menos una sola vez");
} while (false);

//break
//rompe (solo se queda hasta 4)
for (let index = 0; index < 10; index++) {
  console.log("index", index);
  if (index >= 4) break;
}

//continue
//elimina y pasa al siguiente
for (let index = 0; index < 10; index++) {
  if (index == 4 || index == 5 || index == 6) continue;
  console.log("continue", index);
}

//for in
//para recorrer un objeto
const perro = {
  raza: "doberman",
  edad: 3,
  color: "negro",
  nacionalidad: "peru",
  altura: "50",
};

for (const key in perro) {
  console.log("key", key);
  console.log("value", perro[key]);
}
