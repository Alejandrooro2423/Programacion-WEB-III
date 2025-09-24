// ----------Funciones simuladas asíncronas----------
function obtenerUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Usuario obtenido");
      resolve({ id: id, nombre: "Ana" });
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
//----------Versión con anidamiento de promesas----------
function conAnidamiento() {
  console.log("\nVersión con anidamiento de promesas:");
  obtenerUsuario(1).then(usuario => {
    obtenerPosts(usuario.id).then(posts => {
      obtenerComentarios(posts[0]).then(comentarios => {
        console.log("Comentarios finales:", comentarios);
      });
    });
  });
}
// ----------Versión con async/await ----------
async function conAsyncAwait() {
  console.log("\nVersión con async/await:");
  const usuario = await obtenerUsuario(1);
  const posts = await obtenerPosts(usuario.id);
  const comentarios = await obtenerComentarios(posts[0]);
  console.log("Comentarios finales:", comentarios);
}
conAnidamiento();
setTimeout(() => {
  conAsyncAwait();
}, 4000);
//Ambas hacen lo mismo, pero async/await es más limpio y mantenible
