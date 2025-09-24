function miFuncion(numeros) {
  let obj = { pares: [], impares: [] };
  let p = 0; 
  let i = 0; 

  for (let j = 0; j < numeros.length; j++) {
    let num = numeros[j];

    if (num % 2 == 0) {
      obj.pares[p] = num;  
      p++;                 
    } else {
      obj.impares[i] = num; 
      i++;                  
    }
  }

  return obj;
}


let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj);

