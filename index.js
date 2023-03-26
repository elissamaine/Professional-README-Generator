// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


inquirer
  // Questions for user input
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
      name: 'license',
      message: "License?",
      choices: ['None', 'Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'GNU General Public License v3.0', 'MIT License']
    },
    {
      type: 'input',
      name: 'contribution',
      message: "What are the guidelines for contribution?"
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide any tests for your application:'
    },
    {
      type: 'input',
      name: 'userName',
      message: 'Your GitHub username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Your email:'
    },

  ])

  // Function that writes the README file
  .then((data) => {
    const template = generateMarkdown(data)

    fs.writeFile('README.md', template, (err) =>
      err ? console.log(err) : console.log('README.md created!')
    );
  });