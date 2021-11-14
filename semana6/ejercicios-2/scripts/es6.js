//const inputCardnumber = document.querySelector(".input-cart-number");
const cardnumber1 = document.getElementById("card-number");
const cardnumber2 = document.getElementById("card-number-1");
const cardnumber3 = document.getElementById("card-number-2");
const cardnumber4 = document.getElementById("card-number-3");
const cardholder = document.getElementById("card-holder");
const cardexpiremonth = document.getElementById("card-expiration-montn");
const cardexpireyear = document.getElementById("card-expiration-year");
const cardccv = document.getElementById("card-ccv");

const general = document.querySelector(".flip");

const form = document.querySelector("form");
const select2 = document.querySelector(".select #card-expiration-month");
const select3 = document.querySelector(".select #card-expiration-year");

form.addEventListener("keyup", function () {
  const number2 = document.querySelector(".number");
  number2.innerHTML = `
    ${cardnumber1.value} ${cardnumber2.value} ${cardnumber3.value} ${cardnumber4.value}
  `;
  number2.classList.add("number");
  number1.appendChild(number2);
});

form.addEventListener("keyup", function () {
  const cardholder2 = document.querySelector(".card-holder").childNodes[2];
  cardholder2.innerHTML = `${cardholder.value}`;

  cardholder.classList.add("card-holder");
  cardholder1.appendChild(cardholder2);
});

select2.addEventListener("change", function (evt) {
  const cardmonth = document.querySelector(
    ".card-expiration-date #cardmonth10"
  );

  cardmonth.innerText = `${evt.target.value}`;

  //cardexpiremonth.classList.add("card-expiration-date");
  cardmonth10.appendChild(cardmonth);
});

select3.addEventListener("change", function (evento) {
  const cardyear = document.querySelector(".card-expiration-date #prub");
  cardyear.innerText = `${evento.target.value}`;
  cardexpireyear.classList.add("card-expiration-date");
  prub.appendChild(cardyear);
});

cardccv.onmouseout = function () {
  general.classList.add("back");
  form.addEventListener("keyup", function () {
    const ccv = document.querySelector(".ccv");
    ccv.innerText = `${cardccv.value}`;
    ccvtwo.appendChild(ccv);
  });
};
