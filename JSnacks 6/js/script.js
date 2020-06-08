//variabili
var nomi = ["Andrea", "Luca", "Sara", "Alessandro", "Daniele", "Lino"];
var cognomi = ["Maschio", "Pappalardo", "Lusa", "Scolozzi", "Mazzola", "Banfi"];
var nomiCognomi = nomiCognomiFalsi(nomi,cognomi);

console.log(nomiCognomi);

//FUNZIONE generazione nomi cognomi casuali
function nomiCognomiFalsi(nomi,cognomi) {
  var i = 0;
  var nomiCognomi = [];
  var nuovoNomeCognome;

  while (i < nomi.length) {
    nuovoNomeCognome = indiceCasuale(nomi) + " " + indiceCasuale(cognomi);

    if (!nomiCognomi.includes(nuovoNomeCognome)){
      nomiCognomi.push(nuovoNomeCognome);
      i += 1;
    }
  }
  return nomiCognomi;
}

//FUNZIONE generazione indice casuale
function indiceCasuale(nomi){
  var i = Math.floor(Math.random() * nomi.length);
  return nomi[i]
}
