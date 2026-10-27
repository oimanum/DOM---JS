 const posts = [{
         id: 1,
         title: "Introdução ao DOM"
     },
     {
         id: 2,
         title: "Eventos em JavaScript"
     },
     {
         id: 3,
         title: "O que é uma API?"
     }
 ];
 
 const comentarios = [{
         postID: 1,
         id: 1,
         name: "Ana",
         email: "ana@email.com",
         body: "Explicação muito clara!"
     },

     {
         postID: 1,
         id: 2,
         name: "Bruno",
         email: "bruno@email.com",
         body: "Gostei do exemplo do getElementById."
     },

     {
         postID: 2,
         id: 3,
         name: "Carla",
         email: "carla@email.com",
         body: "addEventListener é bem melhor que onclick."
     },

     {
         postID: 2,
         id: 4,
         name: "Diego",
         email: "diego@email.com",
         body: "A analogia do garçom ajudou muito."
     },

     {
         postID: 3,
         id: 5,
         name: "Elisa",
         email: "elisa@email.com",
         body: "Quero testar o JSONPlaceholder!"
     },

     {
         postID: 3,
         id: 6,
         name: "Fábio",
         email: "fabio@email.com",
         body: "E o método POST, como funciona?"
     }
 ];

 const selectPost = document.getElementById("post");
 const titulo = document.getElementById("titulo");
 const listaComentarios = document.getElementById("listaComentarios");

 //Gerar as opções do select com os posts disponíveis
 for (const post of posts) {
     const opcao = document.createElement("option");

     opcao.value = post.id;
     opcao.textContent = post.title;

     selectPost.appendChild(opcao);
 }

 //Mostra os comentários do post selecionado
 function mostrarComentarios() {
     const postID = Number(selectPost.value);

     listaComentarios.innerHTML = "";

     if (postID === 0 || selectPost.value === "") {
         titulo.textContent = "Comentários(0)";
         return;
     }

     const comentariosFiltrados = comentarios.filter(function (comentario) {
         return comentario.postID === postID;
     });

     titulo.textContent = `Comentários(${comentariosFiltrados.length})`;

     for (const comentario of comentariosFiltrados) {
         const card = document.createElement("div");
         card.classList.add("comentario");

         const nome = document.createElement("h3");
         nome.textContent = comentario.name;

         const email = document.createElement("p");
         email.textContent = "E-mail: " + comentario.email;

         const texto = document.createElement("p");
         texto.textContent = comentario.body;

         card.appendChild(nome);
         card.appendChild(email);
         card.appendChild(texto);

         listaComentarios.appendChild(card);

     }
 }

 selectPost.addEventListener("change", mostrarComentarios);

 //Exibir os comentários do post do primeiro post inicialmente
 selectPost.value = "1";
 mostrarComentarios();