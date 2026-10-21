cardapio.js
const nomeDoSeuRestaurante = "lckclubs"; 
const urlAPI = `https://tech4produtos.fly.dev/produtos/restaurante=${nomeDoSeuRestaurante}`;

async function carregarCardapio() {
    try {
        const resposta = await fetch(urlAPI);
        const produtos = await resposta.json();

        const containerCardapio = document.getElementById("cardapio-container");
        if (!containerCardapio) return;

        containerCardapio.innerHTML = "";

        produtos.forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.produto}">
                <h3>${produto.produto}</h3>
                <p>${produto.descricao}</p>
                <button onclick="verDetalhes('${produto._id}')">Ver Detalhes</button>
            `;

            containerCardapio.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

function verDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
}

carregarCardapio();