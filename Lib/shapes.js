//For Circle Shape
class Circle {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render() {
		return `<circle cx="150" cy="100" r="80" fill="${this.color}">
        </circle>`;
	}
}

//For Square Shapes
class Square {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render() {
		return `<rect x="90" y="40" width="120" height="120" fill="${this.color}">
    </rect>`;
	}
}

//For Triangle Shape
class Triangle {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render() {
		return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}">
    </polygon>`;
	}
}

module.exports = { Circle, Square, Triangle };


