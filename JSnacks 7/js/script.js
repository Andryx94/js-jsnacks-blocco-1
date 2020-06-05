var array1 = ["Andrea", "Maschio", "re", "del", "mondo", "emerso", 5, "12"];
var array2 = ["Andrea"];

riempiArray(array1, array2);
console.log(array1, array2);

//FUNZIONE riempimento array
function riempiArray(array1, array2) {

  while (array1.length != array2.length){
    if (array1.length < array2.length) {
      array1.push(array2[Math.floor(Math.random() * array2.length)])
    }

    else{
      array2.push(array1[Math.floor(Math.random() * array1.length)])
    }
  }
}
