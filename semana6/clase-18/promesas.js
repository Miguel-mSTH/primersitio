//promesas son valores con estado rechazado o procesado
//cuando llamamos al backend porque no sabemos cuando se va resolver

// const promesa = new Promise(function (resolve, reject) {
//   //resove devuelve una respuesta y reject  una error
//   setTimeout(function () {
//     resolve([0, 1, 2, 3]);
//   }, 3000);
// });

// promesa
//   .then((response) => {
//     console.log("response", response);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// fetch("https://swapi.dev/api/people")
//   .then((resolve) => {
//     return resolve.json();
//   })
//   .then((people) => {
//     console.log("people", people);
//   })
//   .catch((err) => {
//     console.log("error en promesa", err);
//   });

// FETCH

// function main() {
//   function createPokemon(pokemons) {
//     pokemons.results.map((pokemon) => {
//       console.log("pokemon", pokemon);
//       let article = document.createElement("article");
//       article.innerHTML = `${pokemon.name}`;

//       document.querySelector("#container").appendChild(article);
//     });
//   }
//   fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((resolve) => {
//       return resolve.json();
//     })
//     .then((pokemon) => {
//       createPokemon(pokemon);
//     })
//     .catch((err) => {
//       console.log("error en promesa", err);
//     });
// }

// main();

//ASYNC Y AWAIT

async function main() {
  function createPokemon(pokemons) {
    pokemons.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonDetail = await response.json();
      const container = document.querySelector("#container");

      let article = document.createElement("article");
      article.innerHTML = `
      <figure>
        <img src=${pokemonDetail.sprites.front_default} alt=${pokemonDetail.name}
      </figure>
      ${pokemonDetail.name}
      `;
      article.onclick = function () {
        container.innerHTML = ``;
        console.log("pokemonDetail", pokemonDetail);

        container.appendChild(article);
      };

      container.appendChild(article);
    });
  }
  const responseJsonPokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const responsePokemons = await responseJsonPokemons.json();
  createPokemon(responsePokemons);
  console.log("responsePokemons", responsePokemons);
}

main();

//TODO: ASYNC Y AWAIT
async function prueba() {
  const promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([0, 1, 2, 3, 4]);
    }, 2000);
  });
  try {
    const resonse = await promesa;
    console.log("response", resonse);
  } catch (e) {
    console.log("error", e);
  }
  //promesa
  //  .then((response)=>{
  //console.log('reponse',response)
  // }).catch((err)=>{
  //  console.log('error',err)
  //})
}
prueba();
