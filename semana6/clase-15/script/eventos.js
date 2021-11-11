const button = document.querySelector("button");
const dropdown = document.querySelector(".js_dropdown");

//console.log("button %o", button); //muestra el verdadero valor %

button.onclick = function () {
  if (dropdown.style.display === "block") {
    this.textContent = "Abrir dropdown";
    dropdown.style.display = "none";
  } else {
    this.textContent = "Cerrar dropdown";
    dropdown.style.display = "block";
  }
};

const input = document.querySelector('input[type="text"]');
console.log("input", input);
input.onkeyup = function () {
  console.log("aqui", this.value);
};

const inputCheck = document.querySelector('input[type="checkbox"]');
console.log("input", input);
inputCheck.onchange = function () {
  console.log("aqui", this.checked);
};

window.onresize = function () {
  console.log("resize!!", window.innerWidth, window.innerHeight);
};

const form = document.querySelector("form");

form.onsubmit = function (evt) {
  evt.preventDefault(); //quita el evento por default y se usa despues de (evt) declarado en la funcion
  console.log(
    "nombre",
    this.querySelector('input[placeholder="Nombre"]').value
  );
  console.log(
    "apellido",
    this.querySelector('input[placeholder="Apellido"]').value //registro de propiedad de los elemento querySelector
  );
};

//addEventListener -- acumulan y nose sobreescriben como arriba

function CLICK() {
  console.log("click !!!!");
}

button.addEventListener("click", function () {
  console.log("onclick en add !!");
});

button.addEventListener("click", function () {
  console.log("onclick 3 add!!");
});

button.addEventListener("click", CLICK); //REGISTRANDO EVENTO

const btnQuit = document.querySelector(".js_quit");
btnQuit.addEventListener("click", function () {
  //el primero es el evento(click)
  console.log("quitando del registro");
  button.removeEventListener("click", CLICK); // QUITANDO EVENTO
});

//permite registro de varios eventos con addEventListener y tambien remover
//object event(evento donde esta ocurriendo) -- para formularios quitar el comportamiento por default

document.querySelector("body").addEventListener("mousemove", function (event) {
  console.log(event.clientX);
  console.log(event.clientY);

  this.style.backgroundColor = `rgba(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        1 
    )`;
});
