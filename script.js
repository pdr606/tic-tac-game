const botoesGame = document.querySelectorAll('.game button')

playerX = [];
playerO = [];
player = 'X';
let currentPlayer = "X";

let select = []

const winGame = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]



function iniciar(event){
    const index = event.target.getAttribute("data-set");
    event.target.innerHTML = player;
    event.target.removeEventListener('click', iniciar)
    if (player == 'X'){
        playerX.push(+index)
    } else if (player == 'O'){
        playerO.push(index)
    }

    player = player === "X" ? "O" : "X";

    checkX(index)
    checkO(index)
    
}

let hasWon = false

function checkX(index){
    for (let i = 0; i < winGame.length; i++){
        const win = winGame[i];
        let isCompatible = true;
    

        for (let j = 0; j < win.length; j++){
            const winElement = win[j];
            if (!playerX.includes(winElement)){
                console.log(winElement)
                isCompatible = false
                break;
            }
        }

        if (isCompatible){
            hasWon = true;
            break
        }
    }

    if (hasWon){
        window.alert('Player X Ganhou!!!')
    }

   
}



botoesGame.forEach((item) =>{
    item.addEventListener('click', iniciar)
})
