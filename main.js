
/* les variables du paddle raquette */


var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

/* l'état des touches  */
var rightPressed = false;
var leftPressed = false;


/* les touches clavier */

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

/* Lorsque l'événement keydown est déclenché par l'appui d'une des touches de votre clavier (lorsqu'elles sont enfoncées), la fonction keyDownHandler() est exécutée. Le même principe est vrai pour le deuxième écouteur : les événements keyup activent la fonction keyUpHandler() (lorsque les touches cessent d'être enfoncées) 
 */

/* + condition if else  */

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

/* ************************************* Partie balle ******************************** */



/*  fonction a remettre dans draw ( paddle )   if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    } */
   





/* ********************************************** FIN DE PARTIE AFFICHER LE MESSAGE******************************* */









