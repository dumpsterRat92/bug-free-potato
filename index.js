const inquirer = require('inquirer');
const fs = require('fs');

function generateSVG(text, textColor, shape, shapeColor) {
    let shapeObject;
    switch(shape) {
        case 'circle':
            shapeObject = new Circle(shapeColor);
            break;
        case 'square':
            shapeObject = new Square(shapeColor);
            break;
        case 'triangle':
            hapeObject = new Triangle(shapeColor);
            break;
    }

    return `
        <svg width="300" height="200" xmlns=""http://www.w3.org/2000/svg">
         ${shapeObject.render()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40" font-family="Arial">${text}</text>
        </svg>
    `;

}

function  createLogo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters only.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
            default: 'blue'
        }
    ]).then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
        const svgContent = generateSVG(text, textColor, shape, shapeColor);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    });
    }

    module.exports = { createLogo, generateSVG };