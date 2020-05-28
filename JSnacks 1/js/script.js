//variabili
var primaParola = prompt("Inserisci prima parola");
var secondaParola = prompt("Inserisci seconda parola");
var lunghezzaPrimaParola = primaParola.length;
var lunghezzaSecondaParola = secondaParola.length;
var risultato = document.getElementById('risultato');
var risultatoTesto = document.getElementById('risultato-testo');

//check lunghezza
if (lunghezzaPrimaParola > lunghezzaSecondaParola) {
  risultato.innerHTML+= '<li>' + secondaParola
  risultato.innerHTML+= '<li>' + primaParola
  risultatoTesto.innerHTML = ("La parola più corta è " + secondaParola);
}
else if (lunghezzaPrimaParola < lunghezzaSecondaParola) {
  risultato.innerHTML+= '<li>' + primaParola
  risultato.innerHTML+= '<li>' + secondaParola
  risultatoTesto.innerHTML = ("La parola più corta è " + primaParola);

}

else {
  risultato.innerHTML+= '<li>' + primaParola
  risultato.innerHTML+= '<li>' + secondaParola
  risultatoTesto.innerHTML = ("Le parole sono lunghe uguali");
}
