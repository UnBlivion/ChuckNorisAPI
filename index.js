let botao = document.querySelector("button");
let lista = document.querySelector("div");

botao.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random").then(resposta => {
        return resposta.json();
    }).then(dados => {
        criarPiada(dados);
    });
    botao.classList.add("vaievolta");
});

function criarPiada(dados) {
    lista.innerHTML = '';
    let entrada = document.createElement("h2");
    entrada.innerHTML = (dados["value"]);
    lista.appendChild(entrada);
    botao.classList.remove("vaievolta");
}