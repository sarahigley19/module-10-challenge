const Logo = require('./Logo');

const myLogo = new Logo(300, 200);

myLogo.addRectangle(50, 50, 200, 100, 'blue');

myLogo.addText(100, 150, 'My Logo', 16, 'white');

const svgString = myLogo.build();

console.log(svgString);
