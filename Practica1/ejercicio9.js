function miPromesa() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Éxito");
    }, 3000); 
  });
}
miPromesa().then(function(mensaje) {
  console.log(mensaje);
});
