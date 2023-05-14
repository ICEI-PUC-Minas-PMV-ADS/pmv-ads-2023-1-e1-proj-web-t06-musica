if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./assets/html/singin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
logado.innerHTML = `Pagina em Contrução, mas obrigado por aparecer por aqui ${userLogado.nome}`;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}
function newFunction() {
  return "Pagina em Contrução, mas obrigado por aparecer por aqui);";
}

