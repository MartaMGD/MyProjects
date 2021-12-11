// Create card deck
let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];
let playerPoints = 0;
let iaPoints = 0;


// DOM References
const buttonGet = document.querySelector("#btnGet");
const buttonStop = document.querySelector("#btnStop");
const buttonNew = document.querySelector("#btnNew");
const divPlayerCards = document.querySelector("#player-cards");
const divIaCards = document.querySelector("#ia-cards");
const totalScore = document.querySelectorAll("small");

const createDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}

createDeck();

// Get card
const getCard = () => {
    if (deck.length === 0) {
        throw "The deck is empty."
    }

    const card = deck.pop();
    return card;
}

// Extract the value of the card
const cardValue = (card) => {

    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?
        (value === "A") ? 11 : 10
        : value * 1;

}

// IA Logic
const iaTurn = (minimumPoints) => {
    do {
        const card = getCard();

        iaPoints = iaPoints + cardValue(card);
        totalScore[1].innerText = iaPoints;

        const cardImg = document.createElement("img");
        cardImg.src = `assets/cartas/${card}.png`;
        cardImg.classList.add("card");

        divIaCards.append(cardImg);

        if (minimumPoints > 21) {
            break;
        }

    } while ((iaPoints < minimumPoints) && (minimumPoints <= 21));

    setTimeout(() => {
        if (iaPoints === minimumPoints) {
            alert("It's a draw!")
        } else if (minimumPoints > 21) {
            alert("You lose!")
        } else if (iaPoints > 21) {
            alert("You win!")
        } else {
            alert("You lose!")
        }
    }, 10);
}


// Events
buttonGet.addEventListener("click", () => {
    const card = getCard();

    playerPoints = playerPoints + cardValue(card);
    totalScore[0].innerText = playerPoints;

    const cardImg = document.createElement("img");
    cardImg.src = `assets/cartas/${card}.png`;
    cardImg.classList.add("card");

    divPlayerCards.append(cardImg);

    if (playerPoints > 21) {
        console.warn("You lose!");
        buttonGet.disabled = true;
        iaTurn(playerPoints);

    } else if (playerPoints === 21) {
        console.warn("You won!");
        buttonGet.disabled = true;
        buttonStop.disabled = true;
        iaTurn(playerPoints);
    }

});

buttonStop.addEventListener("click", () => {
    buttonGet.disabled = true;
    buttonStop.disabled = true;

    iaTurn(playerPoints);
});

buttonNew.addEventListener("click", () => {
    deck = [];
    deck = createDeck();

    playerPoints = 0;
    iaPoints = 0;
    
    totalScore[0] = 0;
    totalScore[0].innerText = 0;

    divPlayerCards.innerHTML= "";
    divIaCards.innerHTML = "";

    buttonGet.disabled = false;
    buttonStop.disabled = false;
});