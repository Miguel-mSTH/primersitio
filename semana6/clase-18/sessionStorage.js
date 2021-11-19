//TODO:Session storage --no tiene persistencia se elemina luego de cerrar la pestaña
sessionStorage.setItem("clave", 1234); //setear un valor
console.log(sessionStorage.getItem("clave")); //obtener el valor
console.log(sessionStorage);
sessionStorage.removeItem("clave"); //remover el valor
console.log(sessionStorage);

//TODO:Local Sotarge -- La informacion persiste aunque la pestaña se cierre
localStorage.setItem("clave", 1234); //setear un valor
console.log(localStorage.getItem("clave")); //obtener el valor
console.log(localStorage);
localStorage.removeItem("clave"); //remover el valor
console.log(localStorage);

//TODO:JSON
//stringify guarda en formato json
//parse devuelve a su formato(array u objeto)
const numeros = [0, 1, 2, 3, 4];
sessionStorage.setItem("numeros", JSON.stringify(numeros)); //guardo en json
JSON.parse(sessionStorage.getItem("numeros")); //lo convierte a array(le quita "")

const objeto = { name: "miguel" };
sessionStorage.setItem("objeto", JSON.stringify(numeros)); //guardo en json
JSON.parse(sessionStorage.getItem("objeto")); //lo convierte a objeto(le quita "")
