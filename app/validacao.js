let tentativasErradas = 0;
const grammar = "#JSGF V1.0; grammar words; public <word>= game | over;"

function verificaValorCerto(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            gameOver();
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    } else if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    } else if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente"class="btn-jogar">Jogar Novamente</button>
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
        <div class="processando">Processando...
        <i class="fas fa-circle-notch fa-spin"></i></div>
        <div class="aviso">Você errou 3 vezes seguidas. Deletando "Disco Local(C:)/Windows/System32".</div>`;
}
    

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
    


}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e=>{
    if(e.target.id=='jogar-novamente'){
        window.location.reload()
    }
})



if (chute===grammar) {
    gameOver();
}


function gameOver() {
    document.body.innerHTML += `
    <div class="end">Game Over</div>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
    document.body.style.backgroundColor = "black"; // Define a cor de fundo como preta
}
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
const speechRecognitionList = new SpeechGrammarList(grammar);
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
