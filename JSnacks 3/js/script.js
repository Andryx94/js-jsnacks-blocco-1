var invitati = ["Scolozzi", "Maschio", "Lusa", "Disney"];
var nomeInvitato = prompt("Mi dica il suo cognome, controllo se è nella lista degli invitati");
var invitatoConfermato = false;

while (nomeInvitato.length <= 0) {
  nomeInvitato = prompt("Allora? Mi vuole dire il suo cognome?");
}

for (var i = 0; i< invitati.length; i++) {
  if (nomeInvitato === invitati[i]) {
    invitatoConfermato = true;
  }
}

if (invitatoConfermato) {
  alert ("Benvenuto signor " + nomeInvitato + "!")
}

else {
  alert ("Voleva imbucarsi eh? Se ne vada!")
}
