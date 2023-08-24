let opcion = parseFloat(prompt("Ingrese una opcion"));

switch (opcion) {
  case 1:
    primerEjercicio();
    break;
  case 2:
    segundoEjercicio();
    break;
  case 3:
    tercerEjercicio();
    break;
  case 4:
    cuaertoEjercicio();
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
    case 8: ejerciciOcho(); 
    break;
    case 9: ejercicioNueve();
      break;
}

function primerEjercicio() {
  let edad = parseFloat(prompt("Ingrese su edad"));
  calcularEdad(edad);
}

function segundoEjercicio() {
  let nota = parseFloat(prompt("Ingrese nota"));
  notificarNota(nota);
}

function cuaertoEjercicio() {
  let texto = prompt("Ingrese un texto");

  if (isNaN(texto)) {
    texto = texto.toUpperCase();
    alert(`Su texto en mayuculas: ${texto}`);
  } else {
    alert("Formato no valido");
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

  alert(`Suma total: ${acumulador}`);
}

function ejerciciOcho(){

let texto;
let cadena = new Array();

do{

texto = prompt("Ingrese un texto - Escriba 'fin' para cancelar.");

if (!(texto === "fin")){
  cadena.push(texto);
}

}while (!(texto === "fin"));

texto = cadena.join(" - ");

alert(`${texto}`);

}

function ejercicioNueve (){

  const vocales = ['a','e','i','o','u'];

  const texto = prompt("Ingrese un texto");

  let contador = 0;

  for (let i = 0; i < texto.length; i++){

    if (vocales.includes(texto[i])){
      contador++;
    }

  }

  alert(`El texto: ${texto} tiene ${contador} vocales`);


}
