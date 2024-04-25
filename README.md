# SVG Logo Creator

## Description
This project provides a simple Node.js application for creating SVG logos. It leverages the power of Node.js to create scalable vector graphics based on user inputs. The application supports generating logos with three different shapes: Circle, Square, and Triangle, with customizable colors.

## Features
- Generate SVG logos with custom text and colors.
- Choose from three shapes: Circle, Square, and Triangle.
- Simple CLI-based interaction for logo creation.
- Fully tested with Jest to ensure reliability.

## Prerequisites
Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/en/) (v12.0.0 or higher)
- npm (normally comes with Node.js)

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://your-repository-url.git
   cd svglogo
2. Install the necessary packages:
   npm install

## Usage

To run the SVG logo creator, navigate to the project directory and run:
  node index.js
Follow the prompts in the command line to choose your logo's text, color, and shape.

## Running Tests
This project uses Jest for unit testing. To run the tests, use the following command:

bash
npm test

Project Structure
lib/: Contains the core classes for shapes and other utilities.
shapes.js: Defines the Circle, Square, and Triangle classes.
index.js: The entry point of the application which uses the CLI to interact with the user.
tests/: Contains the tests for the various components.
shapes.test.js: Tests for shape class functionality.

## Contributing
Contributions to this project are welcome. Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b your-branch-name.
Make your changes and commit them: git commit -am 'Add some feature'.
Push to the original branch: git push origin your-branch-name.
Create the pull request.
Alternatively, see the GitHub documentation on creating a pull request.
GitHub Link: (https://github.com/dumpsterRat92/bug-free-potato)

## License
This project is licensed under the MIT License.
  
   
