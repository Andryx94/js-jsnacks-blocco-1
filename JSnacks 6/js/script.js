//variabili
var nomi= ["Andrea", "Luca", "Sara", "Alessandro", "Daniele", "Lino"];
var cognomi = ["Maschio", "Pappalardo", "Lusa", "Scolozzi", "Mazzola", "Banfi"];
var nomiCognomi = nomiCognomiFalsi(nomi,cognomi);

console.log(nomiCognomi);

//FUNZIONE generazione nomi cognomi casuali
function nomiCognomiFalsi(nomi,cognomi) {
  var i=0;
  var nomiCognomi= [];
  var nuovoNomeCognome;

  while (i<nomi.length) {
    nuovoNomeCognome = nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)];

    if (!nomiCognomi.includes(nuovoNomeCognome)){
      nomiCognomi.push(nuovoNomeCognome);
      i+=1;
    }
  }
  return nomiCognomi;
}
