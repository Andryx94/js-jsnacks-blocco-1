var numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var rossoDispari = document.getElementById('rosso');
var verdePari = document.getElementById('verde');

for (var i = 0; i < numeri.length; i++){
  if (numeri[i] % 2 == 0) {
    verdePari.innerHTML += "<li>" + numeri[i];
  }
  else {
    rossoDispari.innerHTML += "<li>" + numeri[i];
  }
}
