function miFuncion(numeros) {
  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    let num = numeros[i];

    if (num > mayor) {
      mayor = num;
    }
    if (num < menor) {
      menor = num; 
    }
  }

  return { mayor: mayor, menor: menor };
}

let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj); 
