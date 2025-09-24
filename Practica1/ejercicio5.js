function miFuncion(texto) {
  texto = texto.toLowerCase(); 
  let invertida = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    invertida = invertida + texto[i];
  }

  if (texto == invertida) {
    return true;
  } else {
    return false;
  }
}

let band = miFuncion("oruro");
console.log(band); 

band = miFuncion("hola");
console.log(band);
