
//Declaramos las variables globales
var canvas,
ctx,
imgFondo,
imgPelota,
imgBomba,
imgZapatilla,
imgGameOver,
finDeJuego = false;
imgCargadas = 0;

//Coordenadas y dimensiones para la pelota
var CoorX = 250;
var CoorY = 220;
var WIDTH = 80;
var HEIGHT = 80;
var px = 50;
var py = 50;

//Coordenadas y dimensiones para la bomba
var CoorBombaX = 0;
var CoorBombaY = 250;
var BombaWidth = 80;
var BombaHeight = 80;
var bx = 5;
var by = -5;

//Coordenadas y dimensiones para la zapatilla
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
  
      //En esta función vamos a cargar todas las imágenes
      function preloadImages() {
    
        //Carga de la imagen del fondo del juego
        imgFondo = new Image();
        imgFondo.src = 'images/campo.jpg';
        imgFondo.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        imgCargadas++;
        paintEscena();
      }, false);

      // Carga de la imagen de la zapatilla del juego
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
      
        //Con este evento damos la funcionalidad a las teclas para mover la pelota
        document.addEventListener("keydown", function(event){
        
        if(event.keyCode == 39){
        console.log("Has pulsado la derecha");
        moverDerecha();
        //Pintaremos la escena cada vez que la imagen se mueva y se repinte en la nueva posición
        paintEscena();
        }
        if(event.keyCode == 37){
        console.log("Has pulsado la izquierda");
        moverIzquierda();
        //Pintaremos la escena cada vez que la imagen se mueva y se repinte en la nueva posición
        paintEscena();
        }
        if(event.keyCode == 38){
        console.log("Has pulsado arriba");
        moverArriba();
        //Pintaremos la escena cada vez que la imagen se mueva y se repinte en la nueva posición
        paintEscena();
        }
        if(event.keyCode == 40){
        console.log("Has pulsado abajo");
        moverAbajo();
        //Pintaremos la escena cada vez que la imagen se mueva y se repinte en la nueva posición
        paintEscena();
        }   
     });
     
        // Carga de la imagen de la pelota del juego
        imgPelota = new Image();
        imgPelota.src = 'images/pelota.png';
        imgPelota.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        imgCargadas++;
        paintEscena();
        }, false);

        // Carga de la imagen de la pelota del juego
        imgGameOver = new Image();
        imgGameOver.src = 'images/gameover.png';
        imgGameOver.addEventListener('load', function() {
        // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
        }, false);
}

function paintEscena () {
  //Las imágenes aparecerán en escena si el total de imágenes es el indicado
  if (imgCargadas >= 4) {
        //pintamos las nuevas posiciones de los objetos y se irán pintando en cada iteración del frame que es llamado en gameLoop
        moverBomba();
        moverZapatilla();
        colision();
        paintFondo();
  //Le damos la condición de que si es finde de juego, pinte en escena el game over
  if (finDeJuego){
      gameOver();
    }
  }
}

function paintFondo () {
// Pintamos lo que va a aparecer en escena al empezar el juego
  ctx.drawImage(imgFondo, 0, 0);
  ctx.drawImage(imgPelota, CoorX, CoorY, WIDTH, HEIGHT);
  ctx.drawImage(imgBomba, CoorBombaX, CoorBombaY, BombaWidth, BombaHeight);
  ctx.drawImage(imgZapatilla, CoorZapaX, CoorZapaY, ZapaWidth, ZapaHeight);
}

//Movemos hacia la derecha la pelota sumando coordenadas
function moverDerecha (){
  CoorX += px;
  //Le indicamos que no se pueda salir del canvas
  if(CoorX > (canvas.width - this.WIDTH )){
  CoorX = canvas.width - this.WIDTH
  }
}
//Movemos hacia la izquierda la pelota restando coordenadas
function moverIzquierda(){
  //Le indicamos que no se salga del canvas
  CoorX -= px;
  if(CoorX < 0){
  CoorX = 0;
  }
}

//Movemos hacia arriba la pelota restando coordenadas
function moverArriba(){
  CoorY -= py;
  //Le indicamos que no se salga del canvas
  if(CoorY < 0){
  CoorY = 0;
  }
}

//Movemos hacia abajo la pelota sumando coordenadas
function moverAbajo(){
  //imgPelota = this.CoorX + 5;
  CoorY += py;
  //Le indicamos que no se salga del canvas
  if(CoorY > (canvas.height - this.HEIGHT )){
  CoorY = canvas.height - this.HEIGHT
  }
}

function moverBomba() {
  //Le damos una velocidad fija a la bomba y le decimos que no salga del canvas
  CoorBombaX += bx;
  CoorBombaY += by;
  if(CoorBombaX + bx > canvas.width -60 || CoorBombaX + bx < 0) {
  //Cuando vaya a salir del canvas, le cambiamos de signo para que rebote
    bx = -bx;
  }
  if(CoorBombaY + by > canvas.height -100 || CoorBombaY + by < 0) {
    by = -by;
  }
}

  function moverZapatilla() {
    //Le damos una velocidad fija a la zapatilla y le decimos que no salga del canvas
    CoorZapaX += zx;
    CoorZapaY += zy;
    if(CoorZapaX + zx > canvas.width -60 || CoorZapaX + zx < 0) {
    //Cuando vaya a salir del canvas, le cambiamos de signo para que rebote
      zx = -zx;
    }
    if(CoorZapaY + zy > canvas.height -100 || CoorZapaY + zy < 0) {
      zy = -zy;
    }
  }
  
  //Método en el cual detectaremos las colisiones según las coordenadas y dimensiones de las imágenes
  function colision(){
  //Colisión para la imagen de la zapatilla
  if (CoorX < CoorZapaX + ZapaWidth &&
    CoorX + WIDTH > CoorZapaX  &&
    CoorY < CoorZapaY + ZapaHeight &&
    HEIGHT + CoorY > CoorZapaY) {
      //Cuando detecte una colisión, ponemos la bandera a true
      finDeJuego = true;
      
     //alert("¡GAME OVER! ¡HAS CHOCADO! Pulsa para otra partida");
    //document.location.reload();
      //¡colision detectada!
     console.log("Colision");
 }
 //Colisión para la imagen de la bomba
 if(CoorX < CoorBombaX  + BombaWidth &&
  CoorX + WIDTH  > CoorBombaX  &&
  CoorY < CoorBombaY + BombaHeight &&
  HEIGHT + CoorY > CoorBombaY){
    //Cuando detecte una colisión, ponemos la bandera a true
    finDeJuego = true;
  
   //alert("¡GAME OVER! ¡HAS CHOCADO! Pulsa para otra partida");
 
    //document.location.reload();
    //¡colision detectada!
    console.log("Colision");
 }
}

//Método el cual pintaremos el game over al finalizar el juego
function gameOver () {
  if(!finDeJuego){
    window.requestAnimationFrame(gameLoop);
  }
  else{
    ctx.drawImage(imgGameOver,0,0);
  }
}



 

