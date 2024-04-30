//  start button
const startButton = document.getElementById('startButton');
const gameModeButtons = document.querySelectorAll('.game-mode-button');
var secondPlayer = 'Player 2'

gameModeButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
  });


function handleButtonClick(event) {
            gameModeButtons.forEach(button => button.classList.remove('active'));
            event.currentTarget.classList.add('active');
  }





startButton.addEventListener('click', () => {
            const selectedMode = document.querySelector('.game-mode-button.active input[name="gameMode"]').value;
            if (selectedMode === 'human') {
                secondPlayer = 'Player 2'
                document.querySelector('.section_2 > h3').innerHTML = secondPlayer

            } else if (selectedMode === 'computer') {
              secondPlayer = 'Computer'
              document.querySelector('.section_2 > h3').innerHTML = secondPlayer
            }
            document.querySelector('.start_area').style.display = 'none'
            document.querySelector('#game').style.display = 'flex'


          });

// init the board
let board = document.querySelector('.board')
let boxes = [];
let boardArray = [[], [], [], [], [], [], [], [], [],[]];
let mergedArray = []
let mainBoardArray = []

for(let i=0;i<100;i++){
  let box = document.createElement("div")
  box.classList.add('box')
  if (i < 10 || (i >= 20 && i < 30) || (i >= 40 && i < 50) || (i >= 60 && i < 70) || (i >= 80 && i < 90)) {
    if (i % 2 === 0) {
      box.innerHTML = i+1;
      box.style.backgroundColor = "#E47300";
      box.style.color = '#fff'
    } else {
      box.innerHTML = i+1
      box.style.backgroundColor = "#F6D553";
    }
  } else {
    if (i % 2 === 0) {
      box.innerHTML = i+1;
      box.style.backgroundColor = "#E47300";
      box.style.color = '#fff'
    } else {
      box.innerHTML = i+1;
      box.style.backgroundColor = "#F6D553";
    }
  }

  boxes.push(box)
}



for (let k = 0; k < 100; k++) {
    const index = Math.floor(k / 10);
    if (index % 2 === 0) {
        boardArray[index].unshift(k);
    } else {
        boardArray[index].push(k);
    }
}

for (let i = 0; i < boardArray.length; i++) {
    mergedArray = mergedArray.concat(boardArray[i]);
}


for(n=0;n<mergedArray.length;n++){
    mainBoardArray.push(boxes[mergedArray[n]])

}

for(let j = mainBoardArray.length -1;j >= 0;j--){
      board.appendChild(mainBoardArray[j])
  }
document.querySelectorAll('.box').forEach((item, i) => {
  item.setAttribute("id", 'e'+item.innerText);
});


// initialize the players

let p1 = document.querySelector('.player_1')
let p2 = document.querySelector('.player_2')
p1.style.position = 'absolute';
p2.style.position = 'absolute';
