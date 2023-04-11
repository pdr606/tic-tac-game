const botoesGame = document.querySelectorAll('.game button') /* Puxo todos meus botões ( casas do jogo ) */
const playerAtual = document.querySelector('.current-player')

playerX = []; /* Declaro um Array para o player X*/
playerO = []; /* Declaro um Array para o player O */
player = 'X'; /* De padrão o primeiro player vai ser o X */

const winGame = [ /* Array com as probabilidades de vitoria */
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]



function iniciar(event){ /* Quando inicio passo o meu evento */
    const index = event.target.getAttribute("data-set"); /* Crio uma constante que vai pegar o atributo da minha casa */
    event.target.innerHTML = player; /* Coloco o desenho na casa de acordo com o player atual */
    event.target.removeEventListener('click', iniciar) /* Removo a função de click da minha casa ja clicada, para não ter erro de ser clicada varias vezes  */
    if (player == 'X'){ /* Se o player for = 'X', vou adicionar o atributo (index) na variavel playerX */
        playerX.push(+index)
    } else if (player == 'O'){ /* Se o player for = 'O', vou adicionar o atributo (index) na variavel playerX */
        playerO.push(+index)
    }
    player = player === "X" ? "O" : "X"; /* Crio um ternario para mudança de player, se o player for X ele vai ser O, se não vai ser X */
    playerAtual.innerHTML = `${player}`
    setTimeout(check, 100) /* A cada 100ms, ativo minha função check */
    
}

botoesGame.forEach((item) =>{
    item.addEventListener('click', iniciar) /* Adiciono um evento de click para cada botão (casa) do meu jogo */
})

let ganhouX = false /* Declaro a variavel para saber se o X ganhou*/
let ganhouO = false /* Declaro a variavel para saber se o O ganhou */

function check(){
    if (playerX.length == 4 && playerO.length == 4){
        window.alert('Empate')
        limpar()
    } else{
        for (let i = 0; i < winGame.length; i++){
            const win = winGame[i]; /* Crio uma constante para cada item do meu winGame */
    
            let compativelX = true; /* Declaro uma variavel para saber se X ou O e compativel */
            let compativelO = true
        
            for (let j = 0; j < win.length; j++){
                const winElement = win[j]; /* Crio uma const para cada valor do meu elemento win*/
    
                if (!playerX.includes(winElement)){ /* Se a minha Array (playerX) não tiver incluido os elementos do winElement ela vai receber o valor de false, e vai retornar o loop */
                    compativelX = false
                }
    
                if (!playerO.includes(winElement)){ /* O mesmo serve para o playerO */
                    compativelO = false
                }
    
            }
    
            if (compativelX){/* Se o meu compativelX foi verdadeira, o ganhouX recebe o valor de true, e dou um break no loop */
                ganhouX = true;
                break
            } else if(compativelO){ /* O mesmo serve para o compativelO */
                ganhouO = true;
                break
            }
                
            
        }
    
        if (ganhouX){ /* Se o X foi true, vou dar um window.alert que o playerX ganhou */
            window.alert('Player X Ganhou!!!')
            limpar()
        } else if (ganhouO){ /* O mesmo serve para o player O */
            window.alert('Player O Ganhou!!!')
            limpar()  
        } 
    }
        
}

function limpar(){ /* Função basica que limpa o meu jogo, retorna ele como padrão, parao usuario jogar novamente */
    playerX = [];
    playerO = [];
    botoesGame.forEach(e =>{
        e.innerHTML = ''
        e.addEventListener('click', iniciar)
    })

    ganhouX = false
    ganhouO = false

}


