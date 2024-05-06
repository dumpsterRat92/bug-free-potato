const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('./lib/shapes');  

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}

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
            shapeObject = new Triangle(shapeColor);
            break;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeObject.render()}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40" font-family="Arial">${text}</text>
        </svg>
    `;


    const filePath = path.resolve(__dirname, 'examples/logo.svg');
    ensureDirectoryExistence(filePath);


    fs.writeFileSync(filePath, svgContent);
    console.log('Generated logo.svg in the examples folder');
    return filePath; 
}

function createLogo() {
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
        generateSVG(text, textColor, shape, shapeColor);  // Generates SVG and handles file writing
    }).catch(error => {
        console.error('An error occurred:', error);
    });
}

module.exports = { createLogo, generateSVG };
createLogo();