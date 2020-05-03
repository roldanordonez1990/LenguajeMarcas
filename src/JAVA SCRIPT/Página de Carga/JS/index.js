var canvas,
ctx,
ctx2,
imgFondo, // Imagen del background del juego
imgPelota,
imgBomba,
imgZapatilla,
imgGameOver,
colapso = false;

imgCargadas = 0;



//Coordenadas para la pelota
var CoorX = 360;
var CoorY = 220;
var WIDTH = 80;
var HEIGHT = 80;

//Coordenadas para la bomba
var CoorBombaX = 0;
var CoorBombaY = 250;
var BombaWidth = 80;
var BombaHeight = 80;
var bx = 5;
var by = -5;

//Coordenadas para la zapatilla
var CoorZapaX = 700;
var CoorZapaY = 100;
var ZapaWidth = 80;
var ZapaHeight = 80;
var zx = 5;
var zy = -5;



function init() {
  alert("Intenta no chocar con los objetos moviéndote con la pelota");
    preloadImages();
   
    // Obtención del elemento html con id = "canvas". Puedes mirar el código html para entender mejor esto
    canvas = document.getElementById('canvas');

    // Necesitamos el contexto del canvas, para poderlo utilizar como "brocha", gracias a este elemento podremos
    // asignar colores y pintar primitivas, imágenes, textos, etc.
    ctx = canvas.getContext("2d");


    // Start the first frame request
    window.requestAnimationFrame(gameLoop);

    
   
  }

function gameLoop(timeStamp){
  paintEscena();

  // Keep requesting new frames
  window.requestAnimationFrame(gameLoop);
}



function preloadImages() {

  
    // Lo primero es comenzar a cargar las imágenes
  
    
    // Carga de la imagen del fondo del juego
    imgFondo = new Image();
    imgFondo.src = 'images/campo.jpg';
   
    imgFondo.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        imgCargadas++;
        paintEscena();
      }, false);

      // Carga de la imagen del fondo del juego
    imgZapatilla = new Image();
    imgZapatilla.src = 'images/zapatilla.png';
   
    imgFondo.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        imgCargadas++;
        paintEscena();
      }, false);


       // Carga de la imagen de la bomba del juego
    imgBomba = new Image();
    imgBomba.src = 'images/bomba.png';
   
    imgBomba.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        
        imgCargadas++;
        paintEscena();
      }, false);
      
      document.addEventListener("keydown", function(event){
          
        if(event.keyCode == 39){
            console.log("Has pulsado la derecha");
            moverDerecha();
            paintEscena();
        }
        if(event.keyCode == 37){
         console.log("Has pulsado la izquierda");
         moverIzquierda();
         paintEscena();
        }
        if(event.keyCode == 38){
            console.log("Has pulsado la izquierda");
            moverArriba();
            paintEscena();
           }
           if(event.keyCode == 40){
            console.log("Has pulsado la izquierda");
            moverAbajo();
            paintEscena();
           }   
     });



     
     // Carga de la imagen del fondo del juego
    imgPelota = new Image();
    imgPelota.src = 'images/pelota.png';
   
    imgPelota.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        imgCargadas++;
        paintEscena();
      }, false);

}

function paintEscena () {
// Sólo pasamos a pintar la escena si nos aseguramos de que las dos imágenes han sido cargadas correctamente.
if (imgCargadas >= 4) {
refrescarMundo();
refrescaZapatilla();
colision();
// Pintamos el fondo, el personaje, los caracteres adivinados y los fallos comentidos por el usuario. Cada cosa en su función
paintFondo();

}
}

function paintFondo () {
// Pinto el fondo de la escena
ctx.drawImage(imgFondo, 0, 0);
ctx.drawImage(imgPelota, CoorX, CoorY, WIDTH, HEIGHT);
ctx.drawImage(imgBomba, CoorBombaX, CoorBombaY, BombaWidth, BombaHeight);
ctx.drawImage(imgZapatilla, CoorZapaX, CoorZapaY, ZapaWidth, ZapaHeight);



}




function moverDerecha(){

//imgPelota = this.CoorX + 5;
CoorX = CoorX+50;

if(CoorX > (canvas.width - this.WIDTH )){
CoorX = canvas.width - this.WIDTH
}

}

function moverIzquierda(){

//imgPelota = this.CoorX + 5;
CoorX = CoorX-50;

if(CoorX < 0){
CoorX = 0;
}

}

function moverArriba(){

//imgPelota = this.CoorX + 5;
CoorY = CoorY-50;
if(CoorY < 0){
CoorY = 0;
}
}

function moverAbajo(){

//imgPelota = this.CoorX + 5;
CoorY = CoorY+50;

if(CoorY > (canvas.height - this.HEIGHT )){
CoorY = canvas.height - this.HEIGHT
}


}

function refrescarMundo() {
//Vamos acercando al borde izquierdo los obstaculos
CoorBombaX += bx;
CoorBombaY += by;
if(CoorBombaX + bx > canvas.width -60|| CoorBombaX + bx < 0) {
  bx = -bx;
}
if(CoorBombaY + by > canvas.height -100|| CoorBombaY + by < 0) {
  by = -by;
}

}

function refrescaZapatilla() {
  //Vamos acercando al borde izquierdo los obstaculos
  CoorZapaX += zx;
  CoorZapaY += zy;
  if(CoorZapaX + bx > canvas.width -60|| CoorZapaX + zx < 0) {
    zx = -zx;
  }
  if(CoorZapaY + zy > canvas.height -100|| CoorZapaY + zy < 0) {
    zy = -zy;
  }

  
  }
  
function colision(){
  if (CoorX < CoorZapaX + ZapaWidth &&
    CoorX + WIDTH > CoorZapaX &&
    CoorY < CoorZapaY + ZapaHeight &&
    HEIGHT + CoorY > CoorZapaY) {

     
      alert("¡GAME OVER! ¡HAS CHOCADO! Pulsa para otra partida");
  
      document.location.reload();
     
      // ¡colision detectada!
     console.log("Colision");
 }
 if(CoorX < CoorBombaX + BombaWidth &&
  CoorX + WIDTH > CoorBombaX &&
  CoorY < CoorBombaY + BombaHeight &&
  HEIGHT + CoorY > CoorBombaY){

   
   alert("¡GAME OVER! ¡HAS CHOCADO! Pulsa para otra partida");
 
    document.location.reload();
 }
}



 

