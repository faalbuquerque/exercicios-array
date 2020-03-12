// Dado um array com recursividade, some todos os valores desse array

function somaArrayX(array){
    if(array.length <= 0) return 0;
        return  array.pop() + somaArrayX(array);
}

let arrayTest = [1,3,8,1,7]; 
console.log(somaArrayX(arrayTest));

/*

function somaArrayRec(arr, i=arr.length){
    if(i <= 0) return 0;
      return arr[i-1] + somaArrayRec(arr, i-1);
}
  


function somaArray(arr){
    let soma = 0;
    for(i=0; i<arr.length; i++) soma = soma + arr[i];  
    return soma;
}

*/ 