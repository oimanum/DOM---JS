const posts = [{
        id: 1,
        title: "Post 1",
        content: "Aprendendo a manipular o DOM."
    },
    {
        id: 2,
        title: "Post 2",
        content: "Arrays de objetos são parecidos com o JSON de uma API."
    },
    {
        id: 3,
        title: "Post 3",
        content: "Em breve vamos buscar estes dados no servidor."
    },
    {
        id: 4,
        title: "Post 4",
        content: "O método find devolve o primeiro item encontrado."
    },
    {
        id: 5,
        title: "Post 5",
        content: "Se nada for encontrado, find devolve undefined."
    }
];

const campoBusca = document.getElementById("campoBusca");
const btnBuscar = document.getElementById("btnBuscar");
const resultadoDiv = document.getElementById("resultado");
const errado = document.getElementById("errado");

function buscarPost() {
    resultadoDiv.innerHTML = "";
    errado.textContent = ""; // Limpa a mensagem de erro antes de cada busca
    const valorBusca = campoBusca.value; // Este valor sempre vem como String (ex: "2")

    // Busca no array usando '== ' para ignorar a diferença de tipo (número vs string)
    const itemEncontrado = posts.find(post => post.id == valorBusca);

    // Exibe o resultado na tela
    if (itemEncontrado) {
        const nome = document.createElement('h2');
        nome.textContent = itemEncontrado.title;
        resultadoDiv.appendChild(nome);

        const conteudo = document.createElement('p');
        conteudo.textContent = itemEncontrado.content;
        resultadoDiv.appendChild(conteudo);
    } else {
        errado.textContent = `Post não encontrado para o ID: ${valorBusca}`;
    }
    
}

    
   

