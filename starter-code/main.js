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

var board = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < cards.length; i++) {
		
		board.appendChild(cardElement);

		var cardElement = document.createElement('div');

		cardElement.className = 'card';
	}

}