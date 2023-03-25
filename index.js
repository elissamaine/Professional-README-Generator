// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {

    },
    {

    },


  ])

  .then((fileName, data) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}README.md`;

    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
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
