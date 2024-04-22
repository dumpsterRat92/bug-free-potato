const { Circle, Square, Triangle } = require('./shapes');

    describe('Circle class', () => {
        it('renders a circle', () => {
            const circle = new Circle('red');
            expect(circle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="red"/>`);
        });
});

    describe('Square Class', () => {
        it('renders a square', () => {
            const square = new Square('blue');
            expect(square.render()).toBe(`<rect width="160" height="160" x="70" y="20" fill="blue"/>`);
        });
});

    describe('Triangle Class', () => {
        it('renders a triangle', () => {
            const triangle = new Triangle('yellow');
            expect(triangle.render()).toBe(`<polygon points="150,40 110,160 190, 160" fill="yellow"/>`);
        });
});
    
