var numero = parseInt(prompt("Dimmi un numero"));
arrayNumeriCasuali(numero);

//funzione generazione N array con 10 numeri casuali
function arrayNumeriCasuali(numero) {
  while (numero>0){
    var array = [];
    for (var i=0; i<10; i++){
      array[i] = Math.ceil(Math.random() * 100);
    }
    console.log(array);
    numero-=1;
  }
}
