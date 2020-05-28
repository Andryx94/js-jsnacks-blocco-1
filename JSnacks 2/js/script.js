//variabili varie
var numero;
var sommaNumero = 0;

//ciclo for
var cicloFor = document.getElementById('ciclo-for');

for (var i = 0; i < 5; i++){
  numero = parseInt(prompt("Dimmi un numero (ciclo for)"));
  sommaNumero += numero;
}

cicloFor.innerHTML = ("La somma del ciclo for è: " + sommaNumero);

//reset
sommaNumero = 0;

//ciclo while
var x = 0;
var cicloWhile = document.getElementById('ciclo-while');

while (x<5) {
  numero = parseInt(prompt("Dimmi un numero (ciclo while)"));
  sommaNumero += numero;
  x+= 1;
}

cicloWhile.innerHTML = ("La somma del ciclo while è: " + sommaNumero);
