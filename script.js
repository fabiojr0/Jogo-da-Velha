const jogo = document.querySelector('.jogo');
const respostas = document.querySelector('#respostas');
const novoJogo = document.querySelector('#novoJogo');
const player1Visu = document.querySelector('#player1');
const player2Visu = document.querySelector('#player2');
let player1 = true;
let player2 = false;
let jogar = 'novo';

player2Visu.classList.add('escuro')


jogo.addEventListener('click', function(infos) {
    const elementoAtual = infos.target;
    if(jogar !== 'velha' && jogar !== 'vencedor'){ 
        if(elementoAtual.innerHTML !== '' ){
            respostas.innerHTML = `O espaço já está preenchido!`
            return;
        }   
        if(player1 === true) {
            elementoAtual.innerHTML = `<div class="cross">x</div>`
            trocarPlayer()
            verifica('x')
        }else {
            elementoAtual.innerHTML = `<div class="circle">.</div>`
            trocarPlayer()
            verifica('.')
        }                
    }
    
});

function trocarPlayer() {
    if(player1 === true) {
        togglePlayer()
        cores()
        respostas.innerHTML = `Turno do jogador 2`
    }
    else{
        togglePlayer()
        cores()
        respostas.innerHTML = `Turno do jogador 1`
    }
}

function togglePlayer() {
    player1 = !player1
    player2 = !player2
}

function cores() {
    player1Visu.classList.toggle('escuro')
    player2Visu.classList.toggle('escuro')
}

function verifica(simbolo) {
    const jogadas = document.querySelectorAll('.espaco');

    let contador = 0;
    console.log(jogadas);


    jogadas.forEach((element) => {
        if(element.innerText !== '') {
            contador++;
        }
    });
    const possiveis = [
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [0,1,2],
        [2,5,8],
        [6,7,8],
        [3,4,5],
        [1,4,7],
    ]
    possiveis.forEach((element) => {
        if(jogadas[element[0]].innerText === simbolo &&
            jogadas[element[1]].innerText === simbolo &&
            jogadas[element[2]].innerText=== simbolo) {   
                respostas.innerHTML = `${simbolo === 'x' ? 'Jogador 1' :  'Jogador 2'} venceu parabéns tu é foda!`
                jogar = 'vencedor';   
                return;    
        }                    
    });
    if(contador === 9 && jogar !== 'vencedor') {
        respostas.innerHTML = `Ixi, Deu Velha! 6 são muito burro`
        jogar = 'velha';
    }   
}

function newGame() {
    const jogadas = document.querySelectorAll('.espaco');
    jogadas.forEach((element) => {
        element.innerHTML = '';
    });
    if(jogar === 'vencedor') {
        respostas.innerHTML = `Quem perdeu começa!`
    }
    else if(jogar === 'velha') {
        respostas.innerHTML = `Começa quem não jogou o ultimo round!`
    }
    else {
        respostas.innerHTML = `Novo jogo iniciado!`
    }
    jogar = 'novo'
    
}



