const { Circle, Square, Triangle } = require('./shapes');

describe('Shape render methods', () => {
    it('renders a circle', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="red" />`);
    });
    //more tests go here for square and triangle
});