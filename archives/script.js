const jogo = document.querySelector('.jogo');
const respostas = document.querySelector('#respostas');
const novoJogo = document.querySelector('#novoJogo');
const player1Visu = document.querySelector('#player1');
const player2Visu = document.querySelector('#player2');
let player1 = true;
let player2 = false;
let jogar = 'novo';
player1Visu.style.filter = `brightness(100%)`;
player2Visu.style.filter = `grayscale(100%)`;

jogo.addEventListener('click', function(infos) {
    const elementoAtual = infos.target;
    if(jogar !== 'velha' && jogar !== 'vencedor'){ 
    if(elementoAtual.innerHTML !== '' ){
        respostas.innerHTML = `O espaço já está preenchido!`
    } 
    else {
        if(player1 === true) {
            elementoAtual.innerHTML = `<div class="cross">x</div>`
            trocarPlayer()
            verifica('x')
        } else {
            elementoAtual.innerHTML = `<div class="circle">.</div>`
            trocarPlayer()
            verifica('.')
        }
        
    }
}
    
});

function trocarPlayer() {
    if(player1 === true) {
        player1 = false;
        player2 = true;
        player2Visu.style.filter = `brightness(100%)`;
        player1Visu.style.filter = `grayscale(100%)`;
        respostas.innerHTML = `Turno do jogador 2`
    }
    else{
        player1 = true;
        player2 = false;
        player1Visu.style.filter = `brightness(100%)`;
        player2Visu.style.filter = `grayscale(100%)`;
        respostas.innerHTML = `Turno do jogador 1`
    }
}

function verifica(simbolo) {
    const jogadas = jogo.children;

    let contador = 0;
    for(let i = 0;i < 9;i++) {
        if(jogadas[i].innerText !== '') {
            contador++;
        }
    }
    possiveis = [
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [0,1,2],
        [2,5,8],
        [6,7,8],
        [3,4,5],
        [1,4,7],
    ]
    for(let i = 0;i < 8;i++) {
        if(jogadas[possiveis[i][0]].innerText === simbolo &&
            jogadas[possiveis[i][1]].innerText === simbolo &&
            jogadas[possiveis[i][2]].innerText=== simbolo) {   
                respostas.innerHTML = `${simbolo === 'x' ? 'Jogador 1' :  'Jogador 2'} venceu parabéns!`
                jogar = 'vencedor';   
                return    
        }
        
    }
    if(contador === 9) {
        respostas.innerHTML = `Ixi, Deu Velha!`
        jogar = 'velha';
    }   
}

function newGame() {
    const jogadas = jogo.children;
    for(let i = 0;i < 9;i++) {
        jogadas[i].innerHTML = ''
    }
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



