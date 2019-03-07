$(document).ready(init);                              //quando il documento è stato caricato parte la funzione init

function init(){

  var leftSide = $(".leftSide");                      //assegniamo alla classe il valore
  var rightSide = $(".rightSide");                    //assegniamo alla classe il valore
  var dots = $(".indexContainer i");                  //assegno ai pallini cliccabili il valore dots

  leftSide.click(leftClick);                          //quando il valore "leftSide" viene cliccato, parte la funzione "leftClick"
  rightSide.click(rightClick);                        //quando il valore "rightSide" viene cliccato, parte la funzione "rightClick"
  dots.click(dotClick)                                //quando il valore "dots" viene cliccato, parte la funzione "dotClick"
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

updateDots();                                         //richiamo la funzione per aggiornare l'indice del pallino
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

updateDots();                                         //richiamo la funzione per aggiornare l'indice del pallino
}


function updateDots() {

  var activeIndex = $("img.active").index();          //all'indice dell'img con classe ".active" assegno il valore "activeIndex"
  var prevDot = $(".indexContainer > i.fas");         //al pallino pieno assegno il valore di "prevDot"
  prevDot.removeClass("fas").addClass("far");         //gli dico di rimuovere la classe "fas"(pallino pieno)e di aggiungere quella "far"(pallino vuoto)

  var dots = $(".indexContainer > i");                //seleziono tutti i pallini e gli assegno il valore "dots"
  var nextDot = dots.eq(activeIndex);                 //dico che l'indice di "dots" corrisponde all'indice di img con classe ".active" e gli assegno il valore "nextDot"
  nextDot.removeClass("far").addClass("fas");         //a "nextDot" rimuovo la classe "far"(pallino vuoto)e aggiungo quella "far"(pallino pieno)
}


function dotClick() {

  console.log("dotClick");
  var clickedIndex = $(this).index();                 //ricavo l'indice dell'elemento cliccato e gli assegno il valore clickedIndex

  var activeImg = $(".pictureContainer img.active");  //all'immagine con la classe active assegno il valore "activeImg"
  activeImg.removeClass("active");                    //gli dico di rimuovere la classe active(d-block) e l'elemento passerà alla classe con d-none

  var imgs = $(".pictureContainer img");              //seleziono tutte le immagini e gli assegno il valore imgs
  var nextImg = imgs.eq(clickedIndex);                //dico che l'indice di "imgs" corrisponde all'indice dell'img cliccato e gli assegno il valore "nextImg"
  nextImg.addClass("active");                         //operazione che assegna la classe ".active" all'elemento "nextImg", quindi da d-none passerà a d-block

  updateDots();                                       //richiamo la funzione per aggiornare l'indice del pallino
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
//}
