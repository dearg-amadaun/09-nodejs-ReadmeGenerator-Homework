// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "Please enter a project title.",
    name: "title"
}, {
    type: "input",
    message: "Please provide a short description of your project.",
    name: "description"
},  {
    type: "input",
    message: "Please provide installation instructions for your project.",
    name:"installation"
}, {
    type: "input",
    message: "Please provide instructions for the use of your project.",
    name: "usage"
}, {
    type: "checkbox",
    message: "Please choose your license.",
    choices: [
        "MIT",
        "GPL-3.0-or-later",
        "Apache-2.0"
    ],
    name: "license"
}, {
    type: "input",
    message: "Please list collaborators, third party assets, and tutorials used with links.",
    name: "contributors"
}, {
    type: "input",
    message: "Please list commands needed to test this program.",
    name: "tests"
}, {
    type: "input",
    message: "Please enter your GitHub username",
    name: "username" //place under questions heading
}, {
    type: "input",
    message: "Please enter your e-mail address",
    name: "mail" //place under questions heading
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data, (err) => 
        err ? console.log(err) : console.log("Success!")
    )};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
