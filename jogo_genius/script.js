let order = [];
let clickedOrder = [];
let score = 0;


// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow");

// Criar ordem aleatoria de cores
let shufferOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acede a proxima cor
let lightColor = (element, number) => {
    //number *= 500;
    number = number * 500;
    setTimeout(() => {

        element.classList.add("selected");
        
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("select");
        
    });
}

// Checa se os bototes clicados são os mesmos da orderm gerada no jogo
let checkOrder =() => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert("Pontuação: $(score) \n Você acertou! Iniciando proximo nível!");
        nextLevel();
    }
}

// Função para o click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("select");

    setTimeout(() => {
        createColorElement(color).classList.remove("select");
        checkOrder();
    }, 250);
}

// função que retornar a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

// função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shufferOrder();
}

// função para gamer over
let gameOver = () => {
    alert("Pontuação: ${score}\n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo.")
    order = [];
    clickedOrder = [];

    playGame();
}
// função para iniciar jogo
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
    score = 0;

    nextLevel();
}

//green.addEventListener("click", click(0));
//red.addEventListener("click", click(1));
//yellow.addEventListener("click", click(2));
//blue.addEventListener("click", click(3));

// eventosde clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// inicio do jogo
playGame();
