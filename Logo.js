const {create} = require('svg.js')

class Logo {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.svg = new create().size(width, height);
}

addRectangle(x, y, width, height, color) {
	const rect = this.svg.rect(width, height).move(x, y).fill(color);
}

addText(x, y, content, fontSize, color) {
	const text = this.svg.text(content).move(x, y).font({ size: fontSize }).fill(color);
}

build() {
	return this.svg.toString();
}

}

module.exports = Logo;