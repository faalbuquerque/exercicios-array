let arr = [];

//add em Pilha
function addNumPilha(num, array=arr, qtd = 4){
  console.log(arr);
  for (i = 0; i < qtd; i++){
    num = Number(prompt('Digite um numero: '));
    array.push(num);
    console.log(array);
  }
}
//addNumPilha();

//add em fila
function addNumFila(num, array = arr, qtd = 4){
  console.log(arr);
  for (i = 0; i < qtd; i++){
    num = Number(prompt('Digite um numero: '));
    array.unshift(num);
    console.log(array);
  }
}
addNumFila();

//excluir
function excluiNum(num, array = arr){
  for(i = 0; i <= array.length; i++){
    let del = array.pop(num);
    alert('Excluindo numeros: ' + del);
    console.log(array); 
  }
}
excluiNum();


/*excluir em fila
function excluiNumFila(num, array = arr){
  for(i = 0; i <= array.length; i++){
    let del = array.pop(num);
    alert('Excluindo numeros em Fila: ' + del);
    console.log(array);
  }
}
excluiNumFila();
*/
