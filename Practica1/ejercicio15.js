//CALLBACK 
function obtenerDatoCallback(callback) {
  setTimeout(function () {
    // éxito
    callback(null, "Dato obtenido con callback");
  }, 1000);
}
// 2) Envoltorio que convierte CALLBACK a PROMESA
function obtenerDatoPromesa() {
  return new Promise(function (resolve, reject) {
    obtenerDatoCallback(function (error, resultado) {
      if (error) {
        reject(error);     // si hay error, rechazamos la promesa
      } else {
        resolve(resultado); // si todo bien, resolvemos la promesa
      }
    });
  });
}
obtenerDatoPromesa()
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.error("Error:", err);
  });

