let amigos = [];
let listaAmigoSorteado = [];

function agregarAmigo() {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("listaAmigos").style.display = "block";
  let amigo = document.getElementById("amigo").value;
  if (amigos.includes(amigo)) {
    alert("Ya existe ese nombre");
    focus();
    return;
  } else {
    if (amigo === "") {
      alert("No puede ingresar nombre en blanco");
      focus();
      return;
    } else amigos.push(amigo);
    let listarAmigos = document.createElement("li");
    listarAmigos.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(listarAmigos);
    focus();
    return;
  }
}

function focus() {
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

function sortearAmigo() {
  document.getElementById("resultado").style.display = "block";

  if (amigos.length === 0) {
    return alert("⚠️ No hay amigos para sortear");
  }

  let amigoMaximo = amigos.length;
  console.log(amigoMaximo);
  let indice = Math.floor(Math.random() * amigos.length);

  let seleccionado = amigos[indice];
  let resultado = document.createElement("li");

  if (listaAmigoSorteado.length == amigoMaximo) {
    alert("Ya se sortearon todos los amigos posibles");
  } else {
    if (listaAmigoSorteado.includes(seleccionado)) {
      //si el numero generado esta en la lista vuelve a ejecutar la misma función, esto se conoce como recursividad, volver a utilizar la funcion que tenemos
      return sortearAmigo();
    } else {
      listaAmigoSorteado.push(seleccionado);
      resultado.textContent = `El amigo secreto sorteado es:  ${seleccionado}`;
      document.getElementById("resultado").appendChild(resultado);
      //document.getElementById("listaAmigos").style.pointerEvents = "none";
      document.getElementById("listaAmigos").style.display = "none";
      console.log(listaAmigoSorteado);
      return;
    }
  }

  return;
}
