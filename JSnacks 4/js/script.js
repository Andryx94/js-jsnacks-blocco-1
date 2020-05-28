var numero = "";
var somma = 0;

while (numero.length != 4 || isNaN(numero)) {
  var numero = (prompt("Dimmi un numero di quattro cifre"));
}

var numeroArray = numero.split("");

for (var i=0; i< numeroArray.length; i++) {
  somma+= parseInt(numeroArray[i]);
}

alert("La somma di tutte le cifre è " + somma);
