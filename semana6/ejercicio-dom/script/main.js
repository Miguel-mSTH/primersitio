const inputName = document.querySelector(".js_name");
const inputLastname = document.querySelector(".js_lastname");
const inputPhoto = document.querySelector(".js_photo");
const inputPhone = document.querySelector(".js_phone");
const inputAddress = document.querySelector(".js_address");
const inputAlias = document.querySelector(".js_alias");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const article = document.createElement("article"); //crea elementos
  article.innerHTML = `
    <figure>
            <img src=${inputPhoto.value} alt='${inputName.value} ${inputLastname.value}'/>
    </figure>   
    <h3>${inputName.value} ${inputLastname.value}</h3>
    <h2><span>${inputAlias.value}</span></h2>
    <div>
    <img class="prueba" src="https://img.icons8.com/color/50/000000/phone.png"/>
    <h2>${inputPhone.value}</h2>
    </div>
    <div>
    <img class="prueba" src="https://img.icons8.com/color/50/000000/address.png"/>
    <h4>${inputAddress.value}</h4>
    </div>
     
    <button>X</button>
    `;
  article.classList.add("card");
  article.querySelector("button").onclick = function () {
    const flag = confirm("Estas seguro que deseas elminar la tarjeta");
    if (flag) app.removeChild(article);
  };
  app.appendChild(article);
  this.reset();
});

//tell:a
