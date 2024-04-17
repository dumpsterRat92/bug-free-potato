const inquirer = require('inquirer');
const fs = require('fs');

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

    function generateSVG(text, textColor, shape, shapeColor) {
        const shapes = {
            circle:`<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`,
            square:`<rect width="160" height="160" x="70" y="20" fill=${shapeColor}" /> `,
            triangle:`<polygon points="150,40 110,160 190, 160" fill=${shapeColor}" />`
        };

        return `
            <svg width="300" height="200" xmlns=""http://www.w3.org/2000/svg">
            ${shapes[shape]}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40" font-family="Arial">${text}</text>
            </svg>
        `;

    }

    module.exports = { createLogo, generateSVG };