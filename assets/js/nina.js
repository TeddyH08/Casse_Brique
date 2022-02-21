for(let i=0;i<9;i++){
    let box = document.createElement("div");
    box.innerHTML="&nbsp;";
    box.setAttribute("id",${i+1});
    if(i%3 == 0){
      let br = document.createElement("br");
      document.body.appendChild(br);
    }
    document.body.appendChild(box);
  }

  const boite1 = document.getElementById("1");
  const boite2 = document.getElementById("2");
  const boite3 = document.getElementById("3");
  const boite4 = document.getElementById("4");
  const boite5 = document.getElementById("5");
  const boite6 = document.getElementById("6");
  const boite7 = document.getElementById("7");
  const boite8 = document.getElementById("8");
  const boite9 = document.getElementById("9");


  let game = document.querySelectorAll("div");
  game.forEach(b => b.addEventListener("click",function(){
    if(this.id == 1){
      boite3.className="select";
      boite6.className="select";
      boite8.className="select";
      boite2.className="deselect";
      boite4.className="deselect";
    }
    if(this.id == 2){
      boite1.className="select";
      boite4.className="select";
      boite5.className="select";
      boite9.className="deselect";
      boite6.className="deselect";
    }
    if(this.id == 3){
      boite2.className="select";
      boite4.className="select";
      boite9.className="select";
      boite8.className="deselect";
    }
    if(this.id == 4){
      boite1.className="select";
      boite8.className="select";
      boite9.className="select";
      boite3.className="deselect";
      boite7.className="deselect";
    }
    if(this.id == 5){
      boite3.className="select";
      boite7.className="select";
      boite8.className="select";
      boite4.className="deselect";
    }
    if(this.id == 6){
      boite4.className="select";
      boite5.className="select";
      boite3.className="deselect";
      boite1.className="deselect";
    }
    if(this.id == 7){
      boite5.className="select";
      boite2.className="deselect";
      boite4.className="deselect";
      boite6.className="deselect";
      boite8.className="deselect";
    }
    if(this.id == 8){
      boite1.className="select";
      boite3.className="select";
      boite5.className="select";
      boite4.className="deselect";
      boite8.className="deselect";
      boite9.className="deselect";
    }
    if(this.id == 9){
      boite4.className="select";
      boite6.className="select";
      boite9.className="select";
      boite5.className="deselect";
    }
  }))

  let inter = setInterval(win,100);

  function win(){
    if(boite1.className=="select" && boite2.className=="select" && boite3.className=="select" && boite4.className=="select" && boite5.className=="deselect" && boite6.className=="select" && boite7.className=="select" && boite8.className=="select" && boite9.className=="select"){
      alert("Vous avez gagné!! Rechargez la page pour recommencer!");
      clearInterval(inter);
    } else {
      return
    }
  }
