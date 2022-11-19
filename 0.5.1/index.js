function verficarListas(){
  document.getElementById('tarefas').classList.replace('tarefas1','tarefas0'); /* FECHA TABELA DE TAREFAS */
  document.getElementById('listP').classList.replace('list1P','list0P');       /* FECHA LISTA DE TAREFAS PENDENTES */
  document.getElementById('listC').classList.replace('list1C','list0C');       /* FECHA LISTA DE TAREFAS CONCLUÍDAS */
  document.getElementById('listE').classList.replace('list1E','list0E');       /* FECHA LISTA DE TAREFAS EXCLUÍDAS */
}


/* LIGAR E DESLIGAR DISPLAY DAS TAREFAS */
function pendentesOn(){
  verficarListas();
  document.getElementById('tarefas').classList.replace('tarefas0','tarefas1'); /* ABRE TABELA DE TAREFAS */
  document.getElementById('listP').classList.replace('list0P','list1P');       /* ABRE LISTA DE TAREFAS PENDENTES */
}
function concluidasOn(){
  verficarListas();
  document.getElementById('tarefas').classList.replace('tarefas0','tarefas1');/* ABRE TABELA DE TAREFAS */
  document.getElementById('listC').classList.replace('list0C','list1C');       /* ABRE LISTA DE TAREFAS CONCLUÍDAS */
}
function excluidasOn(){
  verficarListas();
  document.getElementById('tarefas').classList.replace('tarefas0','tarefas1');/* ABRE TABELA DE TAREFAS */
  document.getElementById('listE').classList.replace('list0E','list1E');       /* ABRE LISTA DE TAREFAS EXCLUÍDAS */
}

/* TAREFAS */

/* PENDENTES */
function scaleTransforme1onP(){
    document.getElementById('item1P').classList.replace('item0','item1');
}
function scaleTransforme2onP(){
    document.getElementById('item2P').classList.replace('item0','item1');
}
function scaleTransforme3onP(){
    document.getElementById('item3P').classList.replace('item0','item1');
}
function scaleTransforme4onP(){
    document.getElementById('item4P').classList.replace('item0','item1');
}
function scaleTransforme1offP(){
    document.getElementById('item1P').classList.replace('item1','item0');
}
function scaleTransforme2offP(){
    document.getElementById('item2P').classList.replace('item1','item0');
}
function scaleTransforme3offP(){
    document.getElementById('item3P').classList.replace('item1','item0');
}
function scaleTransforme4offP(){
    document.getElementById('item4P').classList.replace('item1','item0');
}

/* CONCLUÍDAS */
function scaleTransforme1onC(){
    document.getElementById('item1C').classList.replace('item0','item1');
}
function scaleTransforme2onC(){
    document.getElementById('item2C').classList.replace('item0','item1');
}
function scaleTransforme3onC(){
    document.getElementById('item3C').classList.replace('item0','item1');
}
function scaleTransforme4onC(){
    document.getElementById('item4C').classList.replace('item0','item1');
}
function scaleTransforme1offC(){
    document.getElementById('item1C').classList.replace('item1','item0');
}
function scaleTransforme2offC(){
    document.getElementById('item2C').classList.replace('item1','item0');
}
function scaleTransforme3offC(){
    document.getElementById('item3C').classList.replace('item1','item0');
}
function scaleTransforme4offC(){
    document.getElementById('item4C').classList.replace('item1','item0');
}

/* EXCLUÍDAS */
function scaleTransforme1onE(){
    document.getElementById('item1E').classList.replace('item0','item1');
}
function scaleTransforme2onE(){
    document.getElementById('item2E').classList.replace('item0','item1');
}
function scaleTransforme3onE(){
    document.getElementById('item3E').classList.replace('item0','item1');
}
function scaleTransforme4onE(){
    document.getElementById('item4E').classList.replace('item0','item1');
}
function scaleTransforme1offE(){
    document.getElementById('item1E').classList.replace('item1','item0');
}
function scaleTransforme2offE(){
    document.getElementById('item2E').classList.replace('item1','item0');
}
function scaleTransforme3offE(){
    document.getElementById('item3E').classList.replace('item1','item0');
}
function scaleTransforme4offE(){
    document.getElementById('item4E').classList.replace('item1','item0');
}