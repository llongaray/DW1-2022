function main(){
  var aberto   = document.getElementById('aberto').classList.contains('display2');
  var fechando = document.getElementById('fechando').classList.contains('display2');
  var fechado  = document.getElementById('fechado').classList.contains('display2');
  /* 
  shadowGreen0
  shadowYellow0
  shadowRed0

  shadowGreen1
  shadowYellow1
  shadowRed1
  */
}
function changeToGreenColor(){
  /* if(grey1){ */
  document.getElementById('box1').style.backgroundColor = 'green';
  document.getElementById('box2').style.backgroundColor = 'rgba(255, 255, 0, 0.356)';
  document.getElementById('box3').style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
  /* } */
  if(fechando){
    document.getElementById('fechando').classList.remove('display2');
    document.getElementById('fechando').classList.add('display1');
    document.getElementById('box2').classList.remove('shadowYellow1');
    document.getElementById('box2').classList.add('shadowYellow0');
  }
  if(fechado){
    document.getElementById('fechado').classList.remove('display2');
    document.getElementById('fechado').classList.add('display1');
    document.getElementById('box3').classList.remove('shadowRed1');
    document.getElementById('box3').classList.add('shadowRed0');
  }
  document.getElementById('aberto').classList.remove('display1');
  document.getElementById('aberto').classList.add('display2');
  document.getElementById('box1').classList.remove('shadowGreen0');
  document.getElementById('box1').classList.add('shadowGreen1');
}

function changeToYellowColor(){
  
    document.getElementById('box2').style.backgroundColor = 'yellow';
    document.getElementById('box1').style.backgroundColor = 'rgba(0, 128, 0, 0.356)';
    document.getElementById('box3').style.backgroundColor = 'rgba(255, 0, 0, 0.356)';
    
  if(aberto){
    document.getElementById('aberto').classList.remove('display2');
    document.getElementById('aberto').classList.add('display1');
    document.getElementById('box1').classList.remove('shadowGreen1');
    document.getElementById('box1').classList.add('shadowGreen0');
  }
  if(fechado){
    document.getElementById('fechado').classList.remove('display2');
    document.getElementById('fechado').classList.add('display1');
    document.getElementById('box3').classList.remove('shadowRed1');
    document.getElementById('box3').classList.add('shadowRed0');
  }
  document.getElementById('fechando').classList.remove('display1');
  document.getElementById('fechando').classList.add('display2');
  document.getElementById('box2').classList.remove('shadowYellow0');
  document.getElementById('box2').classList.add('shadowYellow1');
}

function changeToRedColor(){
  /* if(grey3){ */
    document.getElementById('box3').style.backgroundColor = 'red';
    document.getElementById('box2').style.backgroundColor = 'rgba(255, 255, 0, 0.356)';
    document.getElementById('box1').style.backgroundColor = 'rgba(0, 128, 0, 0.356)';
    /* } */
  if(fechando){
    document.getElementById('fechando').classList.remove('display2');
    document.getElementById('fechando').classList.add('display1');
    document.getElementById('box2').classList.remove('shadowYellow1');
    document.getElementById('box2').classList.add('shadowYellow0');
  }
  if(aberto){
    document.getElementById('aberto').classList.remove('display2');
    document.getElementById('aberto').classList.add('display1');
    document.getElementById('box1').classList.remove('shadowGreen1');
    document.getElementById('box1').classList.add('shadowGreen0');
  }
  document.getElementById('fechado').classList.remove('display1');
  document.getElementById('fechado').classList.add('display2');
  document.getElementById('box3').classList.remove('shadowRed0');
  document.getElementById('box3').classList.add('shadowRed1');
}