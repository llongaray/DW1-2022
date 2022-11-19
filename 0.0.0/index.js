function main(){
  var aberto   = document.getElementById('aberto').classList.contains('display2');
  var fechando = document.getElementById('fechando').classList.contains('display2');
  var fechado  = document.getElementById('fechado').classList.contains('display2');
  /* var green    = document.getElementById('box1').style.backgroundColor = 'green';
  var yellow   = document.getElementById('box2').style.backgroundColor = 'yellow';
  var red      = document.getElementById('box3').style.backgroundColor = 'red';
  var grey1    = document.getElementById('box1').style.backgroundColor = '#333';
  var grey2    = document.getElementById('box2').style.backgroundColor = '#333';
  var grey3    = document.getElementById('box3').style.backgroundColor = '#333'; */
}
function changeToGreenColor(){
  /* if(grey1){ */
  document.getElementById('box1').style.backgroundColor = 'green';
  document.getElementById('box2').style.backgroundColor = '#333';
  document.getElementById('box3').style.backgroundColor = '#333';
  /* } */
  if(fechando){
    document.getElementById('fechando').classList.remove('display2');
    document.getElementById('fechando').classList.add('display1');
  }
  if(fechado){
    document.getElementById('fechado').classList.remove('display2');
    document.getElementById('fechado').classList.add('display1');
  }
  document.getElementById('aberto').classList.remove('display1');
  document.getElementById('aberto').classList.add('display2');
}

function changeToYellowColor(){
  
    document.getElementById('box2').style.backgroundColor = 'yellow';
    document.getElementById('box1').style.backgroundColor = '#333';
    document.getElementById('box3').style.backgroundColor = '#333';
    
  if(aberto){
    document.getElementById('aberto').classList.remove('display2');
    document.getElementById('aberto').classList.add('display1');
  }
  if(fechado){
    document.getElementById('fechado').classList.remove('display2');
    document.getElementById('fechado').classList.add('display1');
  }
  document.getElementById('fechado').classList.remove('display2');
  document.getElementById('fechando').classList.add('display2');
}

function changeToRedColor(){
  /* if(grey3){ */
    document.getElementById('box3').style.backgroundColor = 'red';
    document.getElementById('box2').style.backgroundColor = '#333';
    document.getElementById('box1').style.backgroundColor = '#333';
    /* } */
  if(fechando){
    document.getElementById('fechando').classList.remove('display2');
    document.getElementById('fechando').classList.add('display1');
  }
  if(fechado){
    document.getElementById('aberto').classList.remove('display2');
    document.getElementById('aberto').classList.add('display1');
  }
  document.getElementById('fechado').classList.remove('display1');
  document.getElementById('fechado').classList.add('display2');
}