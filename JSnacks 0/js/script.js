var primoNumero = parseInt(prompt("Inserisci il primo numero"));
var secondoNumero = parseInt(prompt("Inserisci il secondo numero"));

if (primoNumero == secondoNumero) {
  alert("I numeri sono uguali");
}

else if (primoNumero > secondoNumero) {
  alert("Il numero più alto è " + primoNumero);
}

else {
  alert("Il numero più alto è " + secondoNumero);
}
