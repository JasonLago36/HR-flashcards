let myCards = [];

class Card {
	constructor(question, answer, typeOf) {
		this.question = question;
		this.answer = answer;
		this.typeOf = typeOf;
	}
}

function add() {
	cardMaker();
	createCardBackground();
}

function cardMaker() {
	// gets the values from the input fields
	const questionField = document.getElementById('questionField').value; //gets the value of the input text field
	const answerField = document.getElementById('answerField').value; // gets the value of the input text field
	const typeField = document.getElementById('typeOf').value;
	//creates the New Card with the inputs "question" and "answers"
	const newCard = new Card(questionField, answerField, typeField);
	//pushes the new card to the array
	myCards.push(newCard);
}

//factory function for making a new card
function createCardBackground() {
	const questionField = document.getElementById('questionField').value; //gets the value of the input text field
	const answerField = document.getElementById('answerField').value; // gets the value of the input text field
	const exampleField = document.getElementById('exampleField').value;
    const typeField = document.getElementById('typeOf').value;
	//card will be placed under the "cardContainer" div for display
	const cardContainer = document.querySelector('.cardContainer');
	//element creation List
	const container = document.createElement('div'); //creates a div that can be used for the container
	const flipCard = document.createElement('div');
	const cardFront = document.createElement('div');
	const question = document.createElement('h1');
	const flipCardBack = document.createElement('div');

    //FRONT OF CARDS
	cardContainer.appendChild(container);
	container.classList.add('flip-card');

	container.appendChild(flipCard);
	flipCard.classList.add('flip-card-inner');

	flipCard.appendChild(cardFront);
	cardFront.classList.add('flip-card-front');

	cardFront.appendChild(question);
	question.innerText = `${typeField} Question:
                            ${questionField}?`;


    // THIS BUTTON IS BROKEN, WHEN CLICKED IT CAUSES CSS "BUBBLING"
    /*                        
	const deleteBtn = document.createElement('button');
	cardFront.appendChild(deleteBtn);
    deleteBtn.classList.add('deleteBtnStyle');
	deleteBtn.innerText = 'Delete';
    */


	//BACK OF CARDS
	flipCard.appendChild(flipCardBack);
	flipCardBack.classList.add('flip-card-back');

	const answer = document.createElement('h1');
	flipCardBack.appendChild(answer);
	answer.innerText = `Answer!
                         ${answerField}!`;

	const example = document.createElement('p');
	flipCardBack.appendChild(example);
	example.innerText = `Example: 
                        ${exampleField}`;
}


