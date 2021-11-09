const h1 = document.querySelector("h1");

console.log("h1 %o", h1);

h1.textContent = "TEXTO MODIFICADO DESDE JS";
h1.style.color = "red";
h1.style.fontSize = "50px";
h1.style.background = "orange";

h1.onclick = function () {
  this.style.fontSize = `${
    Number(this.style.fontSize.replace(`px`, "")) + 10
  }px`;
};

h1.onmouseenter = function () {
  console.log("entra");
  this.style.backgroundColor = "pink";
};

h1.onmouseout = function () {
  console.log("sale");
  this.style.backgroundColor = "orange";
};

function SubmitForm() {
  let form = document.querySelector("form");
  const inpName = document.querySelector(".js_name");
  const inpLastnmae = document.querySelector(".js_lastname");
  const inpPassword = document.querySelector(".js_password");

  form.onsubmit = function (event) {
    event.preventDefault();
    console.log("nombre", inpName.value);
    console.log("apellido", inpLastnmae.value);
    console.log("password", inpPassword.value);
  };
}

SubmitForm();

//querySelector
const titulo = document.querySelector("h1");
console.log("titulo", titulo);

//querySelectorAll - me entrega una coleccion de items
const lists = document.querySelectorAll("li");
for (let index = 0; index < lists.length; index++) {
  lists[index].style.color = "white";
  lists[index].style.backgroundColor = "purple";
}

//Selectores relativos

//childnodes
const ul = document.querySelector("ul");
console.log("childnodes", ul.childNodes);
console.log("children", ul.children); // seleccioma todos los hijos

//first child
console.log("first child ", ul.firstChild);
//first element child
console.log("firstelementchild", ul.firstElementChild);

console.log("lastchild", ul.lastChild);

// nextElementSibling
console.log(
  "nextElementSibling",
  ul.firstElementChild.nextElementSibling.nextElementSibling
);
// previousElementSibling
console.log(
  "previousElementSibling",
  ul.lastElementChild.previousElementSibling
);

//parent -  esto devuelve el nodo que encierra el nodo actual.
console.log("parent", ul.parentElement);
console.log("parent", ul.firstElementChild.parentElement);
//closet - para regresar a un padre determinado
console.log("parent", document.querySelector("a").closest("body"));
console.log(
  "parent",
  document.querySelector("a").closest("body").querySelector("form")
);

//////
h1.innerHTML = "<a href='https://google.com'>agregar html</a>";
h1.setAttribute("class", "hola hola2");
h1.setAttribute("id", "hola hola2");
h1.removeAttribute("id");
h1.removeAttribute("class");
console.log("h1 getAtributte", h1.getAttribute("style"));
console.log("h1 clientWidth", h1.clientWidth);
console.log("h1 clientHeight", h1.clientHeight);
