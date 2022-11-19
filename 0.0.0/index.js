function main(){
var aberto   = document.getElementById('aberto').classList.contains('display2');
var fechando = document.getElementById('fechando').classList.contains('display2');
var fechado  = document.getElementById('fechado').classList.contains('display2');
}
function changeToGreenColor(){
  document.getElementById('box').style.backgroundColor = 'green';
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
  document.getElementById('box').style.backgroundColor = 'yellow';
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
  document.getElementById('box').style.backgroundColor = 'red';
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