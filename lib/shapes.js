class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
};

class Square {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<rect width="160" height="160" x="70" y="20" fill="${this.color}"/>`;
    }
};

class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,40 110,160 190, 160" fill="${this.color}"/>`;
    }
};

module.exports = {
    Circle, 
    Square,
    Triangle
};