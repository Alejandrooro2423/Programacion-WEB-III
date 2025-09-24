function hacerPan() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Preparo los ingredientes");
      resolve();
    }, 1000);
  });
}

function prepararMasa() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Mezclo los ingredientes a la masa");
      resolve();
    }, 1000);
  });
}

function vaAlHorno() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("El pan se esta hornenado ");
      resolve("¡El pan esta listo!, Disfrutalo");
    }, 1000);
  });
}

// Encadenamiento de promesas
hacerPan()
  .then(prepararMasa)
  .then(vaAlHorno)
  .then(function(mensajeFinal) {
    console.log(mensajeFinal);
  })
  .catch(function(error) {
    console.error("Ocurrió un error:", error);
  });
