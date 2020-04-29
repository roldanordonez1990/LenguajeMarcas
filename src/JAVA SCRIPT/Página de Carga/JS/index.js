var canvas,
        ctx,
        imgPelota, // Imagen del background del juego
        imgCargadas = 0;


        function init() {
            // Lo primero es comenzar a cargar las imágenes
            preloadImages();
    
            // Obtención del elemento html con id = "canvas". Puedes mirar el código html para entender mejor esto
            canvas = document.getElementById('canvas');
            // Necesitamos el contexto del canvas, para poderlo utilizar como "brocha", gracias a este elemento podremos
            // asignar colores y pintar primitivas, imágenes, textos, etc.
            ctx = canvas.getContext("2d");
    
            // Inicialización de la palabra al azar, se obtiene un número al azar para determinar una palabra del array de palabras posibles
             alert("Hola, Bienvenid@s");
            // El array de "coincidencias" tendrá tantos elementos como letras tenga la palabra al azar. Todos los elementos se inicializarán
            // al carácter '_', que indicará que esa letra aún no se ha descubierto en la palabra secreta
            
        }


        function preloadImages() {
            // Carga de la imagen del fondo del juego
            imgPelota = new Image();
            imgPelota.src = 'images/campo.jpg';
            imgPelota.addEventListener('load', function() {
                // Este trozo de código se ejecutará de manera asíncrona cuando la imagen se haya realmente cargado.
                imgCargadas++;
                paintEscena();
              }, false);
    
          }  

          function paintEscena () {
            // Sólo pasamos a pintar la escena si nos aseguramos de que las dos imágenes han sido cargadas correctamente.
            if (imgCargadas == 1) {
                // Pintamos el fondo, el personaje, los caracteres adivinados y los fallos comentidos por el usuario. Cada cosa en su función
                paintFondo();
            
            }
        } 

        function paintFondo () {
            // Pinto el fondo de la escena
            ctx.drawImage(imgPelota, 0, 0);
    
        }
    