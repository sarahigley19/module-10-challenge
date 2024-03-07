const { Circle } = require('./shapes.js');

describe("Circle", () => {
	test("Should Render SVG Circle with blue color", () => {
		const expectedSvg =
			'<circle cx="150" cy="100" r="80" fill="blue">\n        </circle>';
		const circle = new Circle();
		circle.setColor("blue");
		const actualSvg = circle.render();
		expect(actualSvg).toEqual(expectedSvg);
	});

	test("Should Render SVG Circle with pink color", () => {
		const expectedSvg =
			'<circle cx="150" cy="100" r="80" fill="pink">\n        </circle>';
		const circle = new Circle();
		circle.setColor("pink");
		const actualSvg = circle.render();
		expect(actualSvg).toEqual(expectedSvg);
	});
});
