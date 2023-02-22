let myCards = [];

class Card {
	constructor(question, answer, typeOf) {
		this.question = question;
		this.answer = answer;
		this.typeOf = typeOf;
	}
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

	const deleteBtn = document.createElement('button');
	cardFront.appendChild(deleteBtn);
	deleteBtn.classList.add('deleteBtnStyle');
	deleteBtn.innerText = 'Delete';
	deleteBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		const parent = document.querySelector('.flip-card');
		parent.removeChild(parent.lastChild);
		//(NOTE: THIS WILL LIKELY NEED TO CHANGE TO WORK IN THE CONTEXT OF THE CARD)
		//(FIRST STEP IS TO FIX CSS BUBBLING ISSUE)
		//SECOND STEP IS TO REMOVE THE PARENT OF WHERE THE BUTTON IS CURRENTLY LOCATED.
		//POTENTIAL SOLUTION! parent.parentElement.remove()
		//POTENTIAL ISSUES IS THIS MAY REMOVE THE ACTUAL CONTAINER THAT HOUSES THE CARDS
		// IF SO WE CAN FIX THIS BY CHANGING WHERE THE QUERY SELECTOR TO THE FLIP-CARD CLASSES CLOSEST CHILD
		// OTHER SOLUTION AND LIKELY THE BETTER OF THEM WOULD BE TO USE THE TARGET METHOD
		parent.remove();
	});

	//BACK OF CARDS
	flipCard.appendChild(flipCardBack);
	flipCardBack.classList.add('flip-card-back');

	const answer = document.createElement('h1');
	flipCardBack.appendChild(answer);
	answer.innerText = `Answer:
                         ${answerField}!`;

	const example = document.createElement('p');
	flipCardBack.appendChild(example);
	example.innerText = `Example:
                        ${exampleField}`;
}





const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', async (event) => {
	event.preventDefault();
	const url = 'https://localhost:8000/api/flashcard/';
	const response = await fetch(url);
	console.log(response);
	const data = await response.json();
});

const addButton = document.getElementById('addBtn')

addButton.addEventListener('click', () => {
	cardMaker();
	createCardBackground();
});
