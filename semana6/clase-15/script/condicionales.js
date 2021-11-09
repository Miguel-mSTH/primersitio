const EDAD_MAX = 18;
const SEX = "m";

function welcome(nombre) {
  return `Bienvenido al bar ${nombre}`; // `` se llaman template string
}

function notWelcome(nombre) {
  return `No eres Bienvenido al bar ${nombre}`;
}

function notSupporAge(nombre) {
  return `Eres menor para entrar al bar ${nombre}`;
}
//camelCase
function elBar() {
  //debugger; puede ir paso a paso en la consola
  let nombre = prompt("Ingresa tu nombre");
  let edad = Number(prompt("Ingresa tu edad"));
  let sexo = prompt("Ingresa tu sexo");

  if (edad > EDAD_MAX && sexo.toLocaleLowerCase() == SEX) {
    alert(welcome(nombre));
  } else if (edad < EDAD_MAX) {
    alert(notSupporAge(nombre));
  } else {
    alert(notWelcome(nombre));
  }
}

//elBar();

function flavorChoose(flavor) {
  return `Elegiste el sabor ${flavor}`;
}

function flavorNotFound(flavor) {
  return `El sabor ${flavor} no lo tenemos aun`;
}

function laHeladeria() {
  let flavor = prompt("Ingresa el sabor que quieres :").toLocaleLowerCase();

  switch (flavor) {
    case "fresa": {
      alert(flavorChoose(flavor));
      break;
    }
    case "melon": {
      alert(flavorChoose(flavor));
      break;
    }
    case "naranja": {
      alert(flavorChoose(flavor));
      break;
    }
    default: {
      alert(flavorNotFound(flavor));
      break;
    }
  }
  alert("Vuelva pronto");
}

laHeladeria();

function saveName(name) {
  let message = "";
  try {
    if (name.length < 6) throw "short";
    if (name.length > 10) throw "long";

    message = `El nombre ${name} es correcto `;
  } catch (err) {
    if (err === "short") {
      message = `El nombre ${name} es muy corto`;
    }
    if (err === "long") {
      message = `El nombre ${name} es muy largo`;
    }
  } finally {
    console.log("Nombre evaluado: ", message);
  }
}

saveName("ana");
saveName("luis");
saveName("sebastian");
