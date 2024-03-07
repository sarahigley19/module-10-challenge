const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./Lib/shapes.js');

async function userPrompt() {
	const userInput = {};

	userInput.text = (
		await inquirer.prompt({
			type: 'input',
			name: 'text',
			message: 'What would you like to write on your logo? Please enter up to three characters.',
			validate: function (input) {
				const isValid = input.length <= 3;
				return isValid || 'Please enter up to three characters.';
			},
		})
	).text;

	userInput.textColor = (
		await inquirer.prompt({
			type: 'input',
			name: 'textColor',
			message: 'Enter text color:',
		})
	).textColor;

	userInput.shapePicker = (
		await inquirer.prompt({
			type: 'list',
			name: 'shapePicker',
			message: 'Which shape would you like to customize?',
			choices: ['Circle', 'Square', 'Triangle'],
		})
	).shapePicker;

	switch (userInput.shapePicker) {
		case 'Circle':
			userInput.circleColor = (
				await inquirer.prompt({
					type: 'input',
					name: 'circleColor',
					message: 'Enter circle color:',
				})
			).circleColor;
			break;

		case 'Square':
			userInput.squareColor = (
				await inquirer.prompt({
					type: 'input',
					name: 'squareColor',
					message: 'Enter square color:',
				})
			).squareColor;
			break;

		case 'Triangle':
			userInput.triangleColor = (
				await inquirer.prompt({
					type: 'input',
					name: 'triangleColor',
					message: 'Enter triangle color:',
				})
			).triangleColor;
			break;
	}

	return userInput;
}

async function generateLogo() {
	const userInput = await userPrompt();

	let shape;

	switch (userInput.shapePicker) {
		case 'Circle':
			shape = new Circle(userInput.circleColor);
			break;

		case 'Square':
			shape = new Square(userInput.squareColor);
			break;

		case 'Triangle':
			shape = new Triangle(userInput.triangleColor);
			break;
	}

	if (shape) {
		const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
	  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${userInput.textColor}">${userInput.text}</text>

    </svg>`;

		const filePath = path.join(__dirname, 'logo.svg');

	
		fs.writeFileSync(filePath, svg);

		console.log(`Generated logo.svg`);
	} else {
		console.error('Invalid shape type');
	}
}

generateLogo();
