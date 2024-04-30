// Create the dice container div
let section_1 = document.querySelector('.section_1')
let section_2 = document.querySelector('.section_2')
var diceContainer = document.createElement('div');
let playerChance = section_1

diceContainer.setAttribute('id', 'dice');
diceContainer.setAttribute('data-side', '1');

var sides = [
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6]
];

// Loop through each side and create the corresponding div
for (var i = 0; i < sides.length; i++) {
    var sideDiv = document.createElement('div');
    sideDiv.classList.add('sides');
    sideDiv.classList.add('side-' + (i + 1));

    // Loop through each dot and create the corresponding span
    for (var j = 0; j < sides[i].length; j++) {
        var dotSpan = document.createElement('span');
        dotSpan.classList.add('dot');
        dotSpan.classList.add('dot-' + sides[i][j]);
        sideDiv.appendChild(dotSpan);
    }

    // Append the side div to the dice container
    diceContainer.appendChild(sideDiv);
}

// Append the dice container to the document body
playerChance.appendChild(diceContainer);


let dice = document.getElementById('dice');
//var outputDiv = document.getElementById('diceResult');
let p1_count = 0;
let p2_count = 0;

function checkTurn(){
    switch (playerChance) {
        case section_1:
          rollDice()
        break;
      default:
        rollDice2()
    }

}

function rollDice(){
    dice.removeEventListener("click", checkTurn);
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");
    let tempHolder =  p1_count;
    p1_count += result;
    if(p1_count > 100){
        p1_count = tempHolder;
    }
    dice.addEventListener("transitionend", () =>{
           p1.style.position = null;
           let element = document.querySelector(`#e${p1_count}`)
           if(element !== null){
              element.appendChild(p1)
           }
           if(result !== 6){
                playerChance = section_2;
             }
             playerChance.appendChild(diceContainer);
             dice.addEventListener("click", checkTurn);
             setTimeout(() => {
            bitesAndClimbes(p1, element);
            if (playerChance === section_2 && secondPlayer === 'Computer') {
                setTimeout(() => {
                    checkTurn();
                }, 1000);
            }
        }, 1000);
      });

}


function rollDice2(){
    dice.removeEventListener("click", checkTurn);
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");
    let tempHolder =  p2_count;
    p2_count += result;
    if(p2_count > 100){
        p2_count = tempHolder;
    }

    dice.addEventListener("transitionend", () =>{
             p2.style.position = null;
             let element = document.querySelector(`#e${p2_count}`)
             if(element !== null){
                element.appendChild(p2)
             }
             if(result !== 6){
                 playerChance = section_1;
             }
             playerChance.appendChild(diceContainer);
             dice.addEventListener("click", checkTurn);
             setTimeout(() => bitesAndClimbes(p2, element), 1000);
      });




}

dice.addEventListener("click", checkTurn);


// checking the logic of the game
function bitesAndClimbes(player, element) {
    // climbing up
    if (element.id === 'e4') {
        let newElement = document.querySelector(`#e${38}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 38);
    }
    if (element.id === 'e34') {
        let newElement = document.querySelector(`#e${69}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 69);
    }
    if (element.id === 'e59') {
        let newElement = document.querySelector(`#e${80}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 80);
    }
    if (element.id === 'e73') {
        let newElement = document.querySelector(`#e${92}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 92);
    }
    // if bitten by snake
    if (element.id === 'e44') {
        let newElement = document.querySelector(`#e${26}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 26);
    }
    if (element.id === 'e52') {
        let newElement = document.querySelector(`#e${30}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 30);
    }
    if (element.id === 'e86') {
        let newElement = document.querySelector(`#e${55}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 55);
    }
    if (element.id === 'e99') {
        let newElement = document.querySelector(`#e${62}`);
        newElement.appendChild(player);
        updateCounter(player.classList[1], 62);
    }
    if (element.id === 'e100') {
        alert(`${player.classList[1]} has won the game!`);
    }
}

function updateCounter(player, counter) {
    if (player === 'player_1') {
        p1_count = counter;
    } else {
        p2_count = counter;
    }
}
