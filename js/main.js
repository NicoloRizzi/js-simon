/**
 * ESERCIZIO SIMON
 * 
 * DESCRIZIONE:
 * Un alert espone 5 numeri casuali (univoci).
 *  Da li parte un timer di 30 secondi.
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 * Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 */

 // PSEUDOCODICE
 /**
  * CREO UN ARRAY PER CONTENERE I 5 NUMERI GENERATI CASUALMENTE
  * CREO LA VARIABILE CHE CONTERRA' IL NUMERO RANDOM 
  * 
  */

  var numberGames = [];
  var numGen;
  for (var i = 0; i <=4; i++){
    numGen = rndmNumber();
    if (numberGames.includes(numGen) ) {
      i--;
    } else {
      numberGames.push(numGen);
    }
  }
  alert("I numeri generati casualmente sono: " + numberGames);
  
  






  // FUNZIONI
  function rndmNumber () {
      var numRandom = Math.floor(Math.random() * 20) + 1;
      return numRandom;
    } 
