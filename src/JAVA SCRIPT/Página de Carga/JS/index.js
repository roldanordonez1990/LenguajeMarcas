var canvas,
        ctx,
        imgFondo, // Imagen del background del juego
        imgPelota,
        vx = 5,
        gravity = 1,
        WIDTH = 100,
        HEIGHT = 100,
        imgCargadas = 0;

        
        //Coordenadas iniciales
        var CoorX = 350;
        var CoorY = 200;

        

        function init() {
            
            preloadImages();
           
            // Obtención del elemento html con id = "canvas". Puedes mirar el código html para entender mejor esto
            canvas = document.getElementById('canvas');
            // Necesitamos el contexto del canvas, para poderlo utilizar como "brocha", gracias a este elemento podremos
            // asignar colores y pintar primitivas, imágenes, textos, etc.
            ctx = canvas.getContext("2d");

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

              // Cargamos la imagen de la pelota

              imgPelota = new Image();
              imgPelota.src = 'images/pelota.png';
             
              imgPelota.addEventListener('load', function() {
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

          function paintEscena () {
            // Sólo pasamos a pintar la escena si nos aseguramos de que las dos imágenes han sido cargadas correctamente.
            if (imgCargadas == 2) {
                // Pintamos el fondo, el personaje, los caracteres adivinados y los fallos comentidos por el usuario. Cada cosa en su función
                paintFondo();
            
            }
        } 

        function paintFondo () {
            // Pinto el fondo de la escena
            ctx.drawImage(imgFondo, 0, 0);
            ctx.drawImage(imgPelota, CoorX, CoorY, WIDTH, HEIGHT);
            
        }    

        
}

function moverDerecha(){
    
    //imgPelota = this.CoorX + 5;
    CoorX = CoorX+28;

    if(CoorX > (canvas.width - this.WIDTH )){
        CoorX = canvas.width - this.WIDTH
    }
   
  }

  function moverIzquierda(){
    
    //imgPelota = this.CoorX + 5;
    CoorX = CoorX-28;

    if(CoorX < 0){
        CoorX = 0;
    }
   
  }

  function moverArriba(){
    
    //imgPelota = this.CoorX + 5;
    CoorY = CoorY-28;
    if(CoorY < 0){
        CoorY = 0;
    }
  }

  function moverAbajo(){
    
    //imgPelota = this.CoorX + 5;
    CoorY = CoorY+28;

    if(CoorY > (canvas.height - this.HEIGHT )){
        CoorY = canvas.height - this.HEIGHT
    }

   
  }
