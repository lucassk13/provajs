index.js
function atualizarContador() {
    const agora = new Date();
    const meiaNoite = new Date();
    meiaNoite.setHours(24, 0, 0, 0);

    const diferenca = meiaNoite - agora;

    if (diferenca <= 0) {
        document.getElementById("contador").innerText = "As ofertas exclusivas terminaram!";
        return;
    }

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundos).padStart(2, '0');

    const elemento = document.getElementById("contador");
    if (elemento) {
        elemento.innerText = `As ofertas exclusivas terminam em: ${h}:${m}:${s}`;
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();