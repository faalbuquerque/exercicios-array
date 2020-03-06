window.onload = () =>{
    userAddNum();
    digitaNumArray();
    msgPilha();
    userdelNum();
  }
  
  let arr = [];

  function digitaNumArray(num, arrayNum){
    num = Number(prompt('Digite um numero: '));
    arrayNum = arr;
    insereNumArray(num, arrayNum);
  }
  
  function insereNumArray(numero, array){
    array.push(numero);
    console.log(array);
  }
  
  function mostraNumArray(array = arr){
    alert(array);
  }
 
  function userAddNum(qtd){
    qtd = Number(prompt('Quantos numeros quer inserir?'));
    for (i = 1; i < qtd; i++){
     digitaNumArray();
     mostraNumArray(); 
    }
  }

  function msgPilha(){
    alert('Numeros adicionados!');
    alert('Exclusao de numeros em pilha!');
  }

  function userdelNum(numero, array = arr){
    insereNumArray(numero, array);
    for(i = array.length; i > 1; i--){
      array.pop(numero);
      mostraNumArray();
    }
    return alert('Fim!');
  }

