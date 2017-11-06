

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "wdi-memorygame-imgs/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "wdi-memorygame-imgs/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "wdi-memorygame-imgs/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "wdi-memorygame-imgs/king-of-diamonds.png",
	},

]
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

var flipCard = function(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	}
}

flipCard(0);
flipCard(2);
console.log(cardsInPlay);
