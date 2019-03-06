$(document).ready(init);                              //quando il documento è stato caricato parte la funzione init

function init(){

  var leftSide = $(".leftSide");                      //assegniamo alla classe il valore
  var rightSide = $(".rightSide");                    //assegniamo alla classe il valore

  leftSide.click(leftClick);                          //quando la il valore "leftSide" viene cliccato, parte la funzione "leftClick"
  rightSide.click(rightClick);                        //quando la il valore "rightSide" viene cliccato, parte la funzione "rightClick"
}

function leftClick(){

console.log("leftClick");
var activeImg = $(".pictureContainer img.active");    //all'immagine con la classe active assegno il valore "activeImg"
activeImg.removeClass("active");                      //gli dico di rimuovere la classe active(d-block) e l'elemento passerà alla classe con d-none

var prevImg;                                          //assegno il valore prevImg
if(activeImg.hasClass("first")){                      //CONDIZIONE: se l'immagine ha la classe ".first"..
  prevImg = $(".pictureContainer img.last");          //..l'elemento precedente sarà quello con la classe ".last"(quindi torna all'ultimo)
}else {                                               //ALTRIMENTI
  prevImg = activeImg.prev("img");                    //passo all'elemento precedente con tag "img"
}

prevImg.addClass("active");                           //operazione che assegna la classe ".active" all'elemento, quindi da d-none passerà a d-block

}

function rightClick(){

console.log("rightClick");
var activeImg = $(".pictureContainer img.active");    //all'immagine con la classe active assegno il valore "activeImg"
activeImg.removeClass("active");                      //gli dico di rimuovere la classe active(d-block) e l'elemento passerà alla classe con d-none

var nextImg;                                          //assegno il valore nextImg
if(activeImg.hasClass("last")){                       //CONDIZIONE: se l'immagine ha la classe ".last"..
  nextImg = $(".pictureContainer img.first");         //..il prossimo elemento sarà quello con la classe ".first"(quindi ritorna alla prima)
}else {                                               //ALTRIMENTI
  nextImg = activeImg.next("img");                    //passo all'elemento successivo con tag "img"
}

nextImg.addClass("active");                           //operazione che assegna la classe ".active" all'elemento, quindi da d-none passerà a d-block

}



/*                                     --ALTRO METODO--
  Cambia il metodo di assegnazione a nextImg.
  Iniziamo col dire che il prossimo elemento è quello con il tag "img",
  però se l'elemento ha la classe "last", nextImg sarà quello con classe "first"
*/
// function rightClick(){
//
// console.log("rightClick");
// var activeImg = $(".pictureContainer img.active");    //assegno "activeImg" all'immagine con la classe active
// activeImg.removeClass("active");                      //gli dico di rimuovere la classe active(d-block) e l'elemento passerà alla classe con d-none
//
// var nextImg = activeImg.next("img");                  //al prossimo elemento con tag "img" assegnamo il valore "nextImg"
// if(activeImg.hasClass("last")){                       //CONDIZIONE: se l'immagine ha la classe ".last"..
//   nextImg = $(".pictureContainer img.first");         //..il prossimo elemento sarà quello con la classe ".first"(quindi ritorna alla prima)
// }
//
// nextImg.addClass("active");                           //operazione che assegna la classe ".active" all'elemento, quindi da d-none passerà a d-block
//
// }
