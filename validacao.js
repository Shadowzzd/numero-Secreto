let tentativasErradas = 0;

function verificaValorCerto(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
        return;
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-angles-up"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-angles-down"></i></div>`;
    }
    
    if (numero !== numeroSecreto) {
        tentativasErradas++;
        if (tentativasErradas === 3) {
            exibirCarregamentoEMensagemNegativa();
        }
    } else {
        tentativasErradas = 0;
    }
}

function exibirCarregamentoEMensagemNegativa() {
    // Aqui você pode exibir o ícone de carregamento e a mensagem negativa
    elementoChute.innerHTML += `
        <div>Processando...
        <i class="fas fa-circle-notch fa-spin"></i></div>
        <div>Você errou 3 vezes seguidas. Deletando "Disco Local(C:)/Windows/System32".</div>`;
}
    

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}
