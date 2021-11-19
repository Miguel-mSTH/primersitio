//callback --> es una funcion que se ejecuta despues de un evento

function createPeople(people) {
  console.log("people", people);
  console.log("%0", JSON.parse(people).results);
  JSON.parse(people).results.map((person) => {
    const card = document.createElement("article");
    card.innerHTML = `
    <p>Nombre ${person.name}</p>
    <p>Altura ${person.height}</p>
    <button>Mostrar filmes</button>
    `;

    card.querySelector("button").onclick = function () {
      console.log("person", person);
      let xhrFill = new XMLHttpRequest();
      xhrFill.open("GET", person.filmes[0]);
      xhrFill.send(null);
      xhrFill.onload = () => {
        console.log(xhrFill.response);
      };
    };

    document.querySelector("#container").appendChild(card);
  });
}

function getResponse() {
  //este es(getResponse) el callback ejecutandose despues del onload
  createPeople(xhr.response);
}

function getError() {
  alert("Intentalo mas tarde");
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.dev/api/people");
xhr.send(null);
xhr.onload = getResponse;
xhr.onerror = getError;

document.querySelector("button").onclick = function () {
  console.log("click!!!");
};

console.log("mas codigo");
