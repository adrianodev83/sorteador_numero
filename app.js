function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert(`Do Número: ${de} deve ser menor que Até o número: ${ate}`);
        return;
    } else {}

    if (quantidade > (ate - de + 1)) {
        alert(`A quantidade: ${quantidade} deve ser maior que o intervalo entre: ${de} e ${ate}`);
        return;
    } else {}

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botaoreiniciar = document.getElementById('btn-reiniciar');
    if (botaoreiniciar.classList.contains('container__botao-desabilitado')) {
        botaoreiniciar.classList.remove('container__botao-desabilitado');
        botaoreiniciar.classList.add('container__botao');
    } else {
        botaoreiniciar.classList.remove('container__botao');
        botaoreiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}