// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What's the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What's the descrption of your project?",
    },
    {
      type: 'input',
      name: 'install',
      message: "What are the required steps to install your project?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "what's the project's usage information?",
    },
    {
      type: 'list',
      name: 'liscence',
      message: "Liscence?",
      choices: []
    },

  ])

  .then((fileName, data) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}README.md`;

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('README created!')
    );
  });

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
