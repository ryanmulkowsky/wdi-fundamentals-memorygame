// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

// if (cardOne === cardTwo) {
	// alert('Sorry, try again.');
	// } else if (cardThree === cardFour) {
		// alert('Sorry, try again.');
	// } else if (cardOne === cardThree) {
		// alert('You found a match!');
	// } else if (cardTwo === cardFour) {
		// alert('You found a match!');
	// } else {
		// alert('Sorry, try again.');
	// }

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < cards.length; i++) {
		
		board.appendChild(cardElement);

		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);
	}

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='kingspades.png' alt='King of Spades' />";
			} else {
				this.innerHTML = "<img src='queenhearts.png' alt='Queen of Hearts' />";
			}

	if (cardsInPlay.length === 2) {

	isMatch(cardsInPlay);

	cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
