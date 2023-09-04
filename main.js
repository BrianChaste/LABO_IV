let resultado = document.getElementById("resultado");

function guia1() {
  let numero = document.getElementById("numero").value;

  numero = parseFloat(numero);

  switch (numero) {
    case 1:
      ejercicioUno();
      break;
    case 2:
      ejercicioDos();
      break;
    case 3:
      ejercicioTres();
      break;
    case 4:
      ejercicioCuarto();
      break;
    case 5:
      ejercicioCinco();
      break;
    case 6:
      ejercicioSeis();
      break;
    case 7:
      ejercicioSiete();
      break;
    case 8:
      ejerciciOcho();
      break;
    case 9:
      ejercicioNueve();
      break;
    case 10:
      ejerciciDiez();
      break;
    case 11:
      ejercicioOnce();
      break;
    default:
      alert("Incorrecto");
      break;
  }

  setTimeout(() => (resultado.textContent = ""), 2000);
}

function ejercicioUno() {
  let edad = parseFloat(prompt("Ingrese su edad"));

  if (edad >= 18) {
    resultado.textContent = `La edad ${edad} es mayor de edad`;
  } else {
    resultado.textContent = `La edad ${edad} es menor de edad`;
  }
}

function ejercicioDos() {
  let nota = parseFloat(prompt("Ingrese nota"));

  if (!isNaN(nota)) {
    if (nota >= 0 && nota <= 3) {
      resultado.textContent = `Su nota ${nota} es muy deficiente`;
    } else if (nota >= 3 && nota <= 5) {
      resultado.textContent = `Su nota ${nota} es insuficiente`;
    } else if (nota == 5 || nota == 6) {
      resultado.textContent = `Su nota ${nota} es suficiente`;
    } else if (nota == 6 || nota == 7) {
      resultado.textContent = `Su nota ${nota} esta bien`;
    } else if (nota >= 7 && nota <= 9) {
      resultado.textContent = `Su nota ${nota} es notable`;
    } else if (nota == 9 || nota == 10) {
      resultado.textContent = `Su nota ${nota} es sobresaliente`;
    }
  } else {
    resultado.textContent = `El digito ingresado no es valido`;
  }
}

function ejercicioCuarto() {
  let texto = prompt("Ingrese un texto");

  if (isNaN(texto)) {
    texto = texto.toUpperCase();
    resultado.textContent = `Su texto en mayusculas: ${texto}`;
  } else {
    resultado.textContent = `Formato no valido`;
  }
}

function ejercicioCinco() {
  let i = 1;

  alert(
    `${i}` +
      "\n" +
      `${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i}` +
      "\n" +
      `${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i} ${++i}`
  );
}

function ejercicioSeis() {
  for (let i = 0; i <= 500; i++) {
    if (i % 4 == 0 && i % 9 == 0) {
      alert(`El numero ${i} es multiplo de 4 y 9`);
    } else if (i % 4 == 0) {
      alert(`El numero ${i} es multiplo de 4`);
    } else if (i % 9 == 0) {
      alert(`El numero ${i} es multiplo de 9`);
    }
  }
}

function ejercicioSiete() {
  let acumulador = 0;
  let numero;

  do {
    numero = parseFloat(prompt("Ingrese un numero - Para salir 0"));

    if (!isNaN(numero)) {
      acumulador += numero;
    } else {
      alert("Numero no valido");
    }
  } while (numero != 0);

  resultado.textContent = `Suma total: ${acumulador}`;
}

function ejerciciOcho() {
  let texto;
  let cadena = new Array();

  do {
    texto = prompt("Ingrese un texto - Escriba 'fin' para cancelar.");

    if (!(texto === "fin")) {
      cadena.push(texto);
    }
  } while (!(texto === "fin"));

  texto = cadena.join(" - ");

  alert(`${texto}`);
}

function ejercicioNueve() {
  const vocales = ["a", "e", "i", "o", "u"];

  const texto = prompt("Ingrese un texto");

  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  resultado.textContent = `El texto: ${texto} tiene ${contador} vocales`;
}

function ejerciciDiez() {
  const texto = prompt("Ingrese un texto");

  const nuevoTexto = texto.split("").reverse().join("");

  // Split Divide el String en un array de carcateres
  // Reverese da vuelta ese array
  // Join Une los caracteres invertidos

  resultado.textContent = `Su texto ${texto} su texto al revez ${nuevoTexto}`;
}

function ejercicioOnce() {
  const radio = parseFloat(prompt("Ingrese el radio del circulo"));
  const PI = 3.1416;
  let area;
  area = PI * radio ** 2;

  /////////////////////////////////////////

  // area = Math.PI * Math.pow(radio,2);
  //PI * radio elevado al cuadrado

  resultado.textContent = `El area del cirulo es ${area}`;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function guia2() {
  let numeroEjercicio = document.getElementById("numero2").value;

  numeroEjercicio = parseFloat(numeroEjercicio);

  switch (numeroEjercicio) {
    case 1:
      let persona = new Persona();

      persona._nombre = prompt("Ingrese su nombre");
      persona._edad = prompt("Ingrese su edad");
      persona._dni = prompt("Ingrese su numero de documento");
      persona._profesion = prompt("Ingrese su profesion");

      resultado2.textContent = persona.toString();

      break;

    case 2:
      let heroe1 = new SuperHero();

      heroe1._nombre = prompt("Ingrese su nombre");
      heroe1._poder = prompt("Ingrese su poder");

      resultado2.textContent = heroe1.presentarse();

      break;

    case 3:
      let villano = new Villano();

      villano._nombre = prompt("Ingrese su nombre villano");
      villano._poder = prompt("Ingrese su poder villano");
      villano._plan = prompt("Ingrese su plan malvado");

      resultado2.textContent = villano.presentarse() + villano.amenazar();
      break;
  }

  setTimeout(() => (resultado2.textContent = ""), 2000);
}

class Persona {
  contadorPersona = 0;

  constructor(nombre, edad, dni, profesion) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = dni;
    this._profesion = profesion;
    this.contadorPersona++;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  get dni() {
    return this._dni;
  }

  set dni(dni) {
    this._dni = dni;
  }

  get profesion() {
    return this._profesion;
  }

  set profesion(profesion) {
    this._profesion = profesion;
  }

  toString() {
    return `Soy ${this._nombre} tengo ${this._edad},
    mi numero de documento es ${this._dni} y soy ${this._profesion}`;
  }
}

class SuperHero {
  constructor(nombre, poder) {
    this._nombre = nombre;
    this._poder = poder;
  }

  presentarse() {
    return `Mi nombre es ${this._nombre} y tengo el poder de ${this._poder}`;
  }
}

class Villano extends SuperHero {
  constructor(nombre, poder, plan) {
    super(nombre, poder);
    this._plan = plan;
  }

  amenazar() {
    return `Mi plan malvado es ${this._plan}`;
  }
}
