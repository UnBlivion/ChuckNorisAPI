let botao = document.querySelector("#rodar");
let lista = document.querySelector("div");
let filtro = document.querySelector("#filtro");
let vaivem = true;

filtro.addEventListener("click", () => {
    modalVaiVem();
})

function modalVaiVem() {
    if (vaivem == true) {
        document.querySelector("#valorFiltro").style.transform = "scaleX(1)";
        document.querySelector("#filtro").style.borderRadius = "0 100px 100px 0";
        vaivem = false;
    }
    else {
        document.querySelector("#valorFiltro").style.transform = " translateX(123px) scaleX(0.01)";
        document.querySelector("#filtro").style.borderRadius = "100px";
        vaivem = true;
    }
}

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