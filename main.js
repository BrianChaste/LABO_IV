let opcion = parseFloat(prompt("Ingrese numero ejercicio"));


switch (opcion) {
  case 1:
    primerEjercicio();
    break;
  case 2:
    segundoEjercicio();
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
