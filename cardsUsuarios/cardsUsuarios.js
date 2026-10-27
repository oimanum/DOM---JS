const usuarios = [
    { id:1, name: "Leanne Graham", email: "Sincere@april.biz", adress: {city: "Gwenborough"}, company: {name: "Romaguera-Crona"}},
    { id:2, name: "Ervin Howell", email: "Shanna@melissa.tv", adress: {city: "Wisokyburgh"}, company: {name: "Deckow-Crist"}},
    { id:3, name: "Clementine Bauch", email: "Nathan@yesenia.net", adress: {city: "McKenziehaven"}, company: {name: "Romaguera-Jacobson"}},
    { id: 4, name: "Patricia Lebsack", email:"Julianne.Oconner@kory.org", adress: {city: "South Elvis"}, company: {name: "Robel-Corkery"}},
];

const cards = document.getElementById('cards');
usuarios.forEach(elemento => {
    const card  = document.createElement('div');
    card.classList.add('card');


    const nome = document.createElement('h2');
    nome.textContent = elemento.name;
    card.appendChild(nome); 

    const email = document.createElement('p')
    email.textContent = elemento.email;
    card.appendChild(email);

    const cidade = document.createElement('p');
    cidade.textContent = elemento.adress.city;
    card.appendChild(cidade);

    const empresa = document.createElement('p');
    empresa.textContent = elemento.company.name;
    card.appendChild(empresa);
   
    cards.appendChild(card);    
})

const totalElement = document.getElementById('total');
totalElement.textContent = `Total de Usuários: ${usuarios.length}`;