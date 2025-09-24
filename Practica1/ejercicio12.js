function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Alejandro" });
    }, 1000);
  });
}

function obtenerPosts(usuarioId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Posts obtenidos");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}
function obtenerComentarios(post) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Comentarios de " + post + " obtenidos");
      resolve(["coment1", "coment2"]);
    }, 1000);
  });
}
// Uso con async/await
async function main() {
  try {
    const usuario = await obtenerUsuario(1);
    const posts = await obtenerPosts(usuario.id);
    const comentarios = await obtenerComentarios(posts[0]);
    console.log("Comentarios finales:", comentarios);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

main();
/* Async/await es, en general, más limpio y mantenible que callbacks
regla de simpre:
uno o dos pasos simples = callback
varios pasos y errores = async/await
*/
