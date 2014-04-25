window.onload = function() {

var playerTotal = 0;
var computerTotal = 0;
var roundNumber = 1;
var slaveCard = document.getElementById('slave');
var citizenCards = document.getElementsByClassName('citizen');
var emperorCard = document.getElementById('emperor');
var play = document.getElementById('play');
var gameWrapper = document.getElementById('gameWrapper');
var endGameText = document.getElementById('endGameText');
var gameText = document.getElementById('gameText');
var pick1;
var compDeck;
var count = 0;

var slaveOrEmperor = function() {
	if (slave == true) {
		slaveCard.style.display = 'inline';
		emperorCard.style.display = 'none';
	}
	else {
		slaveCard.style.display = 'none';
		emperorCard.style.display = 'inline';
	}
}

//changes value of slave based on round, 1-3 & 7-9 emperor, 4-6 & 10-12 slave
var whichRound = function() {
	if ((roundNumber < 4)) {
		slave = false;
		return slave;
	}
	else if ((roundNumber > 6) && (10 > roundNumber)) {
		slave = false;
		return slave;
	}
	else if (roundNumber > 12) {
		gameEnd();
	} 
	else {
		slave = true;
		return slave;
	}
}	


//decides who wins based on which cards are picked, removes citizen cards played, resets hand with makeHand() on w/l
var whoWins = function() {
	makeHand();
	// var pick1 = playerDeck[0];
	if (pick1 == undefined) {
		console.log('pick a card');
	}
	if (pick1 == 'citizen') {
		citizenCards[count].style.display = 'none';
		count++;
		console.log(count);
	}
	console.log(pick1);
	computerPickCard();
	console.log(pick2);
	var winner;
	switch (pick1) {
		case 'emperor': 
			if (pick2 == 'slave') {
				gameText.innerHTML ='computer wins this round';
				winner = 'computer wins this round';
				computerTotal++;
				roundNumber++;
				makeHand();
				break;
			}
			winner = 'you win this round';
			gameText.innerHTML = 'you win this round';
			playerTotal++;
			roundNumber++;
			makeHand();
			break;
						

		case 'slave': 
			if (pick2 == 'emperor') {
				winner = 'you win this round';
				gameText.innerHTML = 'you win this round';
				playerTotal++;
				roundNumber++;
				makeHand();
				break;
			}
			winner = 'computer wins this round';
			gameText.innerHTML = 'computer wins this round';
			computerTotal++;
			roundNumber++;
			makeHand();
			break;		
		case 'citizen':
			if (pick2 == 'emperor') {
				winner = 'computer wins this round';
				gameText.innerHTML = 'computer wins this round';
				computerTotal++;
				roundNumber++;
				makeHand();
				break;
			}
			else if (pick1 == pick2) {
				winner = 'tie, play another card';
				gameText.innerHTML = 'tie, play another card';
				break;
			}
			winner = 'you win this round';
			gameText.innerHTML = 'you win this round';
			roundNumber++;
			playerTotal++;
			makeHand();
			break;			
		}
	return winner;
}

slaveOrEmperor();
whichRound();


//event listeners for play button, and picking the cards
play.addEventListener('click', function() {
	console.log(whoWins());
})

slaveCard.addEventListener('click', function() {
	pick1 = 'slave';
	this.style.border = '3px solid orange';
	this.style.width = '200px';
})

emperorCard.addEventListener('click', function() {
	pick1 = 'emperor';
	this.style.border = '3px solid orange';
	this.style.width = '200px';
})

for (var i = 0; i < citizenCards.length; i++) {
	citizenCards[i].addEventListener('click', function() {
		pick1 = 'citizen';
		this.style.border = '3px solid orange';
		this.style.width = '200px';
	})
}


var computerDeck = function() {
	compDeck = new Array(5);
	if (slave == true) {
		compDeck = ['emperor', 'citizen', 'citizen', 'citizen', 'citizen'];
		return compDeck;
	}
	else {
		compDeck = ['slave', 'citizen', 'citizen', 'citizen', 'citizen'];
		return compDeck;
	}
}

//chooses computer card and deck based off of slave value
var computerPickCard = function() {	
	var pick = Math.round(Math.random()*4);
	pick2 = compDeck[pick];
	delete compDeck[pick];
	console.log(compDeck);
	console.log(pick2);
	return pick2;
}


//makes hand with 4 citizens and either slave or emperor depending on the boolean value of slave
var makeHand = function() {
	whichRound();
	slaveOrEmperor();
	computerDeck();
	count = 0;
 	if (slave == true) {
 		slaveCard.style.display = 'inline';
 		for (var i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	else {
 		emperorCard.style.display = 'inline';
 		for (var i = 0; i < citizenCards.length; i++) {
 			citizenCards[i].style.display = 'inline';
 		}
 	}
 	return;
	}
}

var gameEnd = function() {
	gameWrapper.style.display = 'none';
	endGameText.style.display = 'inline';
}






//from here on is temp stuff/in progress stuff

// var pickCard = function() {
// 	var newDeck = makeHand();
// 	console.log(newDeck);
// }

// pickCard();

// console.log(Math.round(Math.random()*4));

//var firstRound = function() {
//	slave == false;
// 	player.makeHand();
//  slave == true;
// 	computer.makeHand();
//}

// var pickCard = function() {

// }'

// var cards = get.ElementByTagName('cards');
// cards.addEventListener('click', function() {
// 	var emperor = document.getElementById('emperor');
// 	var citizen = document.getElementById('citizen');
// 	var slave = document.getElementById('slave');
// 	if (slave == true) {
// 		playerCard = 'slave';
// 	}
// 	else if (citizen == true) {
// 		playerCard = 'citizen';
// 	}
// 	else {
// 		playerCard = 'emperor'
// 	}
// }

// }
// var round = function() {

// }

// idea: emperor = 1, citizen = 2 slave = -1,
// if pick = 0 then slave and emp so slave wins 
// if pick = 3 then emperor beats citizen
// else pick = 1 and citizen beats slave



