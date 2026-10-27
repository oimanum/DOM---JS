const formulario = document.getElementById("formulario");
const json = document.getElementById("json");
const tabela = document.getElementById("tabela");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const dados = new FormData(formulario);

    const objeto = {};

    for (const [chave, valor] of dados) {
        objeto[chave] = valor;
    }

    json.textContent = JSON.stringify(objeto, null, 2);

    const linha = document.createElement("tr");

    for (const [chave, valor] of dados) {
        const coluna = document.createElement("td");

        coluna.textContent = valor;

        linha.appendChild(coluna);
    }

    tabela.appendChild(linha);

    mensagem.textContent = "";

    formulario.reset();

});