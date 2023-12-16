document.addEventListener('DOMContentLoaded', () => {
  // Solicitar o nome do jogador
  const playerName = prompt('Digite seu nome:');

  const cards = [
        {
          name: 'android',
          img: 'images/android.png'
        },
        {
          name: 'arvore',
          img: 'images/arvore.png'
        },
        {
          name: 'bala',
          img: 'images/bala.png'
        },
        {
          name: 'pirulito',
          img: 'images/pirulito.png'
        },
        {
          name: 'lapis',
          img: 'images/lapis.png'
        },
        {
          name: 'pipoca',
          img: 'images/pipoca.png'
        },
        {
          name: 'android',
          img: 'images/android.png'
        },
        {
          name: 'arvore',
          img: 'images/arvore.png'
        },
        {
          name: 'bala',
          img: 'images/bala.png'
        },
        {
          name: 'pirulito',
          img: 'images/pirulito.png'
        },
        {
          name: 'lapis',
          img: 'images/lapis.png'
        },
        {
          name: 'pipoca',
          img: 'images/pipoca.png'
        }
      ]
  
       cards.sort(() => 0.5 - Math.random())
  
        const board = document.querySelector('.board')
        const resultView = document.querySelector('#result');
        let cardsChosen = [];
        let cardsChosenId = [];
        let cardsWon = [];
        
        function createBoard() {
          for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/fundo.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
          }
        }
      function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
                  if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/fundo.png')
        cards[optionTwoId].setAttribute('src', 'images/fundo.png')
        alert('Você clicou na mesma imagem')
      }
           else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Você encontrou uma combinação')
        cards[optionOneId].setAttribute('src', 'images/correto.png')
        cards[optionTwoId].setAttribute('src', 'images/correto.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/fundo.png')
        cards[optionTwoId].setAttribute('src', 'images/fundo.png')
        alert('Errou, tente novamente')
      }
      cardsChosen = []
      cardsChosenId = []
           resultView.textContent = 'Pares Encontrados: '+cardsWon.length
      if  (cardsWon.length === cards.length/2) {
        resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
      }
    }
          function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })