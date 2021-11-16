function contarVocales(texto, vocales) {
  let contadorVocales = 0;
  //let vocales = ["a", "e", "i", "o", "u"];
  //let vocales = prompt("ingrese vocal");

  for (let i = 0; i < texto.length; ++i) {
    if (vocales.indexOf(texto[i]) >= 0) {
      ++contadorVocales;
    }
  }
  return contadorVocales;
}

//console.log(contarVocales("jarana", "a"));

function agregarIndice(texto) {
  return console.log(texto[1]);
}
//console.log(agregarIndice("prueba"));

//ARRAY
function concatenar(letras) {
  //const letras = ["a", "l", "t", "o"];
  return console.log(letras.join(""));
}
//console.log(concatenar(["p", "r", "u", "e", "b", "a"]));

//const prs = "";
function transform(elementos) {
  //const elementos = [1, "casa", 2, "hola", {}];
  let result = elementos.map((item) => typeof item);
  return result;
}

//console.log(transform([1, "hola"]));
//console.log(result);
