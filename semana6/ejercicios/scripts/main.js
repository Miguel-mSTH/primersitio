function suma() {
  let number1 = parseFloat(prompt("Ingrese un numero"));
  let number2 = parseFloat(prompt("Ingrese otro numero"));

  return (totalSuma = number1 + number2);
}
//suma();
//alert(totalSuma);

function promedio() {
  let nota1 = parseFloat(prompt("Ingrese nota 1"));
  let nota2 = parseFloat(prompt("Ingrese nota 2"));
  let nota3 = parseFloat(prompt("Ingrese nota 3"));
  let nota4 = parseFloat(prompt("Ingrese nota 4"));

  return (totalPromedio = (nota1 + nota2 + nota3 + nota4) / 4);
}

//promedio();
//alert(totalPromedio);

function rectangulo() {
  let baseRect = parseFloat(prompt("Ingrese la base del Rectangulo"));
  let alturaRect = parseFloat(prompt("Ingrese la altura del rectangulo"));

  return (areaRectangulo = baseRect * alturaRect);
}

//rectangulo();
//alert(areaRectangulo);

function triangulo() {
  let baseTria = parseFloat(prompt("Ingrese la base del triangulo"));
  let alturaTria = parseFloat(prompt("Ingrese la altura del triangulo"));

  return (areaTriangulo = (baseTria * alturaTria) / 2);
}

//triangulo();
//alert(areaTriangulo);

function circunferencia() {
  let radio = parseFloat(prompt("Ingrese la radio de la circunferencia"));
  const pi = 3.14;

  return (areaCircunferencia = pi * radio ** 2);
}

//circunferencia();
//alert(areaCircunferencia);

function mensaje(totalSueldo) {
  return `El sueldo total es : ${totalSueldo}`;
}

function sueldo() {
  const horaSueldo = 10;
  let horasTrabajadas = parseFloat(
    prompt("Ingrese el numero de horas trabajadas")
  );

  return (totalSueldo = horaSueldo * horasTrabajadas);
}

//sueldo();
//alert(mensaje(totalSueldo));

function convertirMetros() {
  const pulgada = 0.0254;
  let cantidadMetros = parseFloat(
    prompt("Ingres la cantidad de metros que desea convertir a pulgadas")
  );

  return (totalPulgadas = cantidadMetros / pulgada);
}

//convertirMetros();
//alert(totalPulgadas);
//EXERCISE 8
function convertirSoles() {
  const dolar = 0.25;
  let dineroSoles = parseFloat(
    prompt("Ingrese la cantidad que desea convertir a dolares")
  );

  return (totalDolar = dineroSoles * dolar);
}

//convertirSoles();
//alert(totalDolar);
//EXERCISE 9
function edadTrabajo() {
  const actual = 2021;
  let nacer = parseFloat(prompt("Indique el año de tu nacimiento :"));

  return (edadActual = actual - nacer);
}

//edadTrabajo();
//alert(edadActual);
//EXERCISE 10
function mensaje2(nom, ed) {
  return `${nom} con ${ed} años es el menor de todos`;
}

function menorEdad() {
  var personone = {
    nom: "Jose",
    ed: 11,
  };
  var persontwo = {
    nom: "Lucy",
    ed: 5,
  };
  var personthree = {
    nom: "Mar",
    ed: 9,
  };

  if (personone.ed < persontwo.ed && personone.ed < personthree.ed) {
    alert(mensaje2(personone.nom, personone.ed));
  } else if (persontwo.ed < personone.ed && persontwo.ed < personthree.ed) {
    alert(mensaje2(persontwo.nom, persontwo.ed));
  } else {
    alert(mensaje2(personthree.nom, personthree.ed));
  }
}

//menorEdad();
//EXERCISE 11
function bono() {
  let yearWork = parseInt(prompt("Ingrese los años que trabajo"));

  switch (yearWork) {
    case (yearWork = 1): {
      alert("Su bono es de 100 solsitos");
      break;
    }
    case (yearWork = 2): {
      alert("Su bono es de 200 solsitos");
      break;
    }
    case (yearWork = 3): {
      alert("Su bono es de 300 solsitos");
      break;
    }
    case (yearWork = 4): {
      alert("Su bono es de 400 solsitos");
      break;
    }
    case (yearWork = 5): {
      alert("Su bono es de 500 solsitos");
      break;
    }
    default: {
      alert("Su bono es de 1000 solsasos");
    }
  }
}
//bono();
//EXERCISE 12
function profesor() {
  let inicialSalario = 1500;
  const years = 7;

  for (let i = 1; i < years; i++) {
    inicialSalario = inicialSalario + inicialSalario * 0.1;
    console.log("El salario del año " + i + " es " + parseInt(inicialSalario));
  }
}

//profesor();

//plantillas para publicidad (evatoro) envatomaster themeforest
//figma prototipo
//benchmarking

//dribbble ejemplo de sistemas layaout para inspirarse

//EXERCISE 13
function alumnosAprobados() {
  let cantidadAlumnos = parseFloat(prompt("Ingrese el numero de alumnos"));
  for (let i = 0; i < cantidadAlumnos; i++) {
    let notaAlumno = parseFloat(prompt("Ingrese nota del alumno " + i));
    if (notaAlumno < 10) {
      console.log("El alumno " + i + " desaprobo");
    } else {
      console.log("El alumno " + i + " aprobo");
    }
  }
}

//alumnosAprobados();

//EXERCISE 14
function focos() {
  let cantidadFocos = parseFloat(prompt("ingrese la cantidad de focos"));
  verde = 0;
  rojo = 0;
  blanco = 0;
  while (cantidadFocos > 0) {
    let color = prompt("ingrese el color verde,blanco,rojo");
    switch (color) {
      case "verde": {
        verde++;
        break;
      }
      case "blanco": {
        blanco++;
        break;
      }
      case "rojo": {
        rojo++;
        break;
      }
      default: {
        console.log("color no valido");
      }
    }
    cantidadFocos--;
  }
  console.log(
    "Los focos verdes: " + verde + " blancos: " + blanco + " rojos: " + rojo
  );
}
//focos();

//EXERCISE 15

function votarOn() {
  let edadVotar = parseFloat(prompt("Ingrese su edad"));
  if (edadVotar < 18) {
    console.log("No puede votar");
  } else {
    console.log("Puede votar");
  }
}

//votarOn();
