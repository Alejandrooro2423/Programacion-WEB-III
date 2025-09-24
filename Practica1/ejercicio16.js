// Versión con Promesas
function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nombre: "Alejandro" });
    }, 1000);
  });
}
function obtenerPosts(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["post1", "post2"]);
    }, 1000);
  });
}
// Uso con promesas (.then / .catch)
obtenerUsuario()
  .then(usuario => {
    console.log("Versión Promesa -> Usuario:", usuario);
    return obtenerPosts(usuario.id);
  })
  .then(posts => {
    console.log("Versión Promesa -> Posts:", posts);
  })
  .catch(error => {
    console.error("Versión Promesa -> Error:", error);
  });
// Versión con async/await
async function main() {
  try {
    const usuario = await obtenerUsuario();
    console.log("Versión Async/Await -> Usuario:", usuario);

    const posts = await obtenerPosts(usuario.id);
    console.log("Versión Async/Await -> Posts:", posts);
  } catch (error) {
    console.error("Versión Async/Await -> Error:", error);
  }
}
main();
