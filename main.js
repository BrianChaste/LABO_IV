const Persona = requiere(./);
let opcion = parseFloat(prompt("Ingrese numero ejercicio"));

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
}

function primerEjercicio() {
  let edad = parseFloat(prompt("Ingrese su edad"));
  calcularEdad(edad);
}

function segundoEjercicio() {
  let nota = parseFloat(prompt("Ingrese nota"));
  notificarNota(nota);
}

function tercerEjercicio (){

  let listaPeronas = new Array(Persona);
  let persona1 = new Persona("Brian", 24);

  listaPeronas.push(persona1);


  console.log(listaPeronas[0]);
 

  



}


