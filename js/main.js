/**
 * ESERCIZIO SIMON
 * 
 * DESCRIZIONE:
 * Un alert espone 5 numeri casuali (univoci).
 *  Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

 // PSEUDOCODICE
 /**
  * CREO UN ARRAY PER CONTENERE I 5 NUMERI GENERATI CASUALMENTE
  * CREO LA VARIABILE CHE CONTERRA' IL NUMERO RANDOM 
  * 
  */

  var numberGames = [];
  var numGen;
  var numberUser = [];
  for (var i = 0; i <=4; i++){
    numGen = rndmNumber();
    if (numberGames.includes(numGen) ) {
      i--;
    } else {
      numberGames.push(numGen);
    }
  }
  alert("I numeri generati casualmente sono: " + numberGames);
  setTimeout(get5Number, 2000);
  
  
  






  // FUNZIONI
  // FUNZIONE GENERA NUMERO RANDOM
  function rndmNumber () {
      var numRandom = Math.floor(Math.random() * 20) + 1;
      return numRandom;
    } 

    // FUNZIONE CHIEDI NUMERI
    function get5Number() {
      for (var i = 0; i <=4; i++) {
        numUser = parseInt(prompt('Inserisci il numero'));
        numberUser.push(numUser);        
      }
      console.log(numberUser);
    }
