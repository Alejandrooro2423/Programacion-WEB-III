function ejecutar(callback) {
  setTimeout(callback, 2000); 
}

ejecutar(function() {
  console.log("¡Felicidades eres 2 segundos mas viejo");
});
