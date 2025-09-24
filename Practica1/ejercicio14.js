function obtenerMensaje() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mensaje de éxito desde la promesa");
    }, 1000);
  });
}
// promesa a callback
function obtenerMensajeConCallback(callback) {
  obtenerMensaje()
    .then(resultado => callback(null, resultado)) 
    .catch(error => callback(error, null));       
}
obtenerMensajeConCallback((err, msg) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log(msg);
  }
});
