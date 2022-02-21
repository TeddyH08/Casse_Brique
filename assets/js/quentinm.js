var balle=""
var ctn=''
var taille_balle=40
var angle=0
var ht=7
var inter=""
var tb_posi_l=[10,70,130,190,250,310,370,430,490,10,70,130,190,250,310,370,430,490,10,70,130,190,250,310,370,430,490];
var tb_posi_t=[100,100,100,100,100,100,100,100,100,50,50,50,50,50,50,50,50,50,25,25,25,25,25,25,25,25,25];
var tb_elem=[]
var tb_coup=[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
var nbr=tb_posi_l.length
var balle_partie=3

function init(){

    balle=document.getElementById('babale');
    ctn=document.getElementById('ctn');
    hauteur_ctn=ctn.offsetHeight;
    largeur_ctn=ctn.offsetWidth;
    
    init_terrain()
    
    addEventListener("mousemove",bouge_cur, false);

    inter=setInterval(bouge,19);

}

function init_terrain(){

for(var i=0;i<tb_posi_l.length;i++){

    var elem=document.createElement("div");
    elem.className="bloc";
    
    if(tb_coup[i]==1){
    elem.className="bloc2";
    }    
    
    elem.style.left=tb_posi_l[i]+"px";
    elem.style.top=tb_posi_t[i]+"px";
    tb_elem.push(ctn.appendChild(elem));
    
    }
}

var antibug=false

function bouge(){

    bord();
    bord_cur();
    
    if(nbr==0){clearInterval(inter);alert("partie terminé");return false};
    
    
    
    
    
    balle.style.left=balle.offsetLeft+angle+"px";
    balle.style.top=balle.offsetTop+ht+"px";
    
    for(var i=0;i<tb_posi_l.length;i++){
    
    if(tb_posi_l[i]!="azert" && collision(tb_posi_l[i],tb_posi_t[i],balle.offsetLeft,balle.offsetTop)){
    
    var posi_x=balle.offsetLeft;
    var posi_y=balle.offsetTop;
    
    if (posi_x-angle<tb_posi_l[i]){
        
        angle=Math.abs(angle);
    }

    else if (posi_x+angle>tb_posi_l[i]-20){
        
        angle=-angle;
    }

    else if (posi_y+ht<tb_posi_t[i]){
        
        ht=-7;
    }

    else if (posi_y+ht>tb_posi_t[i]-50){
        
        ht=7;
    }
    
    if(tb_coup[i]==0){

        tb_elem[i].parentNode.removeChild(tb_elem[i]);
        tb_posi_l[i]="azert";
        nbr--;
    }
    
    else{
    tb_elem[i].className="bloc";
    }
    
    tb_coup[i]--;
    
    angle< 0 ? angle=Math.abs(angle) : angle=-angle;
    ht< 0 ? ht=Math.abs(ht) : ht=-ht;
    
    }
    }
    

    
}


function bord(){

    var cur=document.getElementById('cucure');

    var posi_x=balle.offsetLeft;
    var posi_y=balle.offsetTop;

    if (posi_x-angle<0){
        balle.style.left=0+"px";
        angle=Math.abs(angle);
    }

    if (posi_x+angle>largeur_ctn-taille_balle){
        balle.style.left=largeur_ctn-taille_balle+"px";
        angle=-angle;
    }

    if (posi_y+ht<0){
        balle.style.top=0+"px";
        ht=7;
    }

    if (posi_y+ht>hauteur_ctn-taille_balle){
        balle.style.top=hauteur_ctn-taille_balle+"px";
        ht=-7;
        balle_partie--;
        
        
        if (balle_partie==-1){
        
        clearInterval(inter);
        alert("perdu :(");
        return false;    
        }
        document.getElementById('point').textContent=balle_partie;
    }
}


function bouge_cur(e){

    var cur=document.getElementById('cucure');

    var cur_l=cur.offsetWidth;

    var cur_x=e.clientX-ctn.offsetLeft-(cur_l/2);

    if (cur_x+cur_l+1>largeur_ctn){

        cur.style.left=largeur_ctn-cur_l+"px";
    }

    else if (cur_x-1<0){

        cur.style.left=0+"px";
    }

    else{
        cur.style.left=cur_x+"px";
    }

}

function bord_cur(){

    var cur=document.getElementById('cucure');

    var cur_x=cur.offsetLeft;
    var cur_y=cur.offsetTop;

    var posi_x=balle.offsetLeft;
    var posi_y=balle.offsetTop;

    if (posi_y>cur_y-taille_balle){

        if(posi_x>=cur_x-balle.offsetWidth && posi_x<=cur_x+cur.offsetWidth){

            var intermed=(30*(posi_x-cur_x+balle.offsetWidth)/(cur.offsetWidth+balle.offsetWidth))-15;

            angle=Math.round(intermed);

            ht=-7;
        }
    }
}

function collision(box_l,box_t,bille_l,bille_t){

    if((bille_l >= box_l + 50) || (bille_l + taille_balle <= box_l) || (bille_t >= box_t + 15) || (bille_t + taille_balle <= box_t)){
        return false;
    }
    else{
        return true;
    }
}
onload=init

/* selection du sound  */

/* const soundElement = document.getElementById("sound");

soundElement.addEventListener("click", audioManager);

function audioManager() {
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "assets/images/SOUND_ON.png" ? "assets/images/SOUND_OFF.png" :
    "assets/images/SOUND_ON.png";

    soundElement.setAttribute("src", SOUND_IMG);


    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true; 
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;

}


const gameover = document.getElementById("gameover");
const gameover = document.getElementById("youwin");
const gameover = document.getElementById("youlose");
const gameover = document.getElementById("restart");

restart.addEventListener("click", function()); */




