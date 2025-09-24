function miFuncion(texto) {
  let palabra_invertida = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    palabra_invertida = palabra_invertida + texto[i];
  }

  return palabra_invertida;
}


let cadena = miFuncion("abcd");
console.log(cadena); 
