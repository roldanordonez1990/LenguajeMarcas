var canvas,
        ctx,
        imgFondo, // Imagen del background del juego
        imgPelota,
        imgBomba,
        
        imgCargadas = 0;

        
        //Coordenadas para la pelota
        var CoorX = 150;
        var CoorY = 200;
        var WIDTH = 100;
        var HEIGHT = 100;

        //Coordenadas para la bomba
        var CoorBombaX = 0;
        var CoorBombaY = 250;
        var BombaWidth = 100;
        var BombaHeight = 100;
        var bx = 50;
        var by = -20;
        
        


        

        function init() {
          
            preloadImages();
           
            // Obtención del elemento html con id = "canvas". Puedes mirar el código html para entender mejor esto
            canvas = document.getElementById('canvas');
            // Necesitamos el contexto del canvas, para poderlo utilizar como "brocha", gracias a este elemento podremos
            // asignar colores y pintar primitivas, imágenes, textos, etc.
            ctx = canvas.getContext("2d");

              // Start the first frame request
         window.requestAnimationFrame(gameLoop);

           // document.addEventListener("keydown", moverDerecha);

           
           
            // Inicialización de la palabra al azar, se obtiene un número al azar para determinar una palabra del array de palabras posibles
             //alert("Hola, Bienvenid@s");
            // El array de "coincidencias" tendrá tantos elementos como letras tenga la palabra al azar. Todos los elementos se inicializarán
            // al carácter '_', que indicará que esa letra aún no se ha descubierto en la palabra secreta
           
          
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


              window.onload= function(){
                
              }
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

             // Cargamos la imagen de la pelota

             imgPelota = new Image();
             imgPelota.src = 'images/pelota.png';
            
             imgPelota.addEventListener('load', function() {
               // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
               imgCargadas++;
               paintEscena();

             }, false);

          function paintEscena () {
            // Sólo pasamos a pintar la escena si nos aseguramos de que las dos imágenes han sido cargadas correctamente.
            if (imgCargadas == 3) {
              refrescarMundo();
                // Pintamos el fondo, el personaje, los caracteres adivinados y los fallos comentidos por el usuario. Cada cosa en su función
                paintFondo();
                
            
            }
        } 

        function paintFondo () {
            // Pinto el fondo de la escena
            ctx.drawImage(imgFondo, 0, 0);
            ctx.drawImage(imgPelota, CoorX, CoorY, WIDTH, HEIGHT);
            ctx.drawImage(imgBomba, CoorBombaX, CoorBombaY, BombaWidth, BombaHeight);
            
            
        }    
}


function moverDerecha(){
    
    //imgPelota = this.CoorX + 5;
    CoorX = CoorX+35;

    if(CoorX > (canvas.width - this.WIDTH )){
        CoorX = canvas.width - this.WIDTH
    }
   
  }

  function moverIzquierda(){
    
    //imgPelota = this.CoorX + 5;
    CoorX = CoorX-35;

    if(CoorX < 0){
        CoorX = 0;
    }
   
  }

  function moverArriba(){
    
    //imgPelota = this.CoorX + 5;
    CoorY = CoorY-35;
    if(CoorY < 0){
        CoorY = 0;
    }
  }

  function moverAbajo(){
    
    //imgPelota = this.CoorX + 5;
    CoorY = CoorY+35;

    if(CoorY > (canvas.height - this.HEIGHT )){
        CoorY = canvas.height - this.HEIGHT
    }

   
  }


  function refrescarMundo() {
    //Vamos acercando al borde izquierdo los obstaculos
    CoorBombaX += bx;

}

  function gameLoop(timeStamp){
    paintEscena();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}
   
  
  

   

