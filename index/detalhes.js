detalhes.js
const parametrosURL = new URLSearchParams(window.location.search);
const produtoId = parametrosURL.get("id");

const urlDetalhes = `https://tech4produtos.fly.dev/produtos/${produtoId}`;

async function carregarDetalhes() {
    if (!produtoId) return;

    try {
        const resposta = await fetch(urlDetalhes);
        const produto = await resposta.json();

        const containerDetalhes = document.getElementById("detalhes-container");

        if (containerDetalhes) {
            containerDetalhes.innerHTML = `
                <div class="produto-detalhe">
                    <img src="${produto.imagem}" alt="${produto.produto}">
                    <h2>${produto.produto}</h2>
                    <p><strong>Restaurante:</strong> ${produto.restaurante}</p>
                    <p><strong>Descrição:</strong> ${produto.descricao}</p>
                    <a href="cardapio.html">Voltar ao Cardápio</a>
                </div>
            `;
        }
    } catch (error) {
        console.error(error);
    }
}

carregarDetalhes()