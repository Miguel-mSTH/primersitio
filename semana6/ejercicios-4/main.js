function agregarNombres() {
  for (i = 0; i < 10; i++) {
    const names = [prompt("Ingrese un nombre")];
    console.log(names);
  }
  alert("se completo");
}
//agregarNombres();

const inputName = document.querySelector(".js_name");
const inputLastname = document.querySelector(".js_lastname");
const inputAge = document.querySelector(".js_age");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(typeof inputName.value);
  //console.log(typeof inputAge.value);
  const varia = [
    inputName.value,
    inputLastname.value,
    parseInt(inputAge.value),
  ];
  for (i = 0; i < varia.length; i++) {
    let asre = typeof varia[i];
    let asri = varia[i];
    let resulta = `${asri} : ${asre}`;
    let objet6 = {};
    //console.log(Object.assign(objet6, { resulta }));
    let resultadoFinal = Object.assign(objet6, { resulta });
    console.log(resultadoFinal);
    //return resultadoFinal;
  }

  function resultadoFinal(name, lastname, age) {
    return {
      name,
      lastname,
      age,
    };
  }

  console.log(resultadoFinal(resultadoFinal.name));

  //let asre = typeof inputName.value;
  //let asri = inputName.value;
  //let resulta = `${asri} : ${asre}`;
  //console.log(resulta);
  //console.log(`${asri} : ${asre}`);
  //console.log(inputName.value);
});
