// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
       type:"input",
       message:"What is the name of your project?",
       name: "title",
    },
    {
        type:"input",
        message:"Please provide a description for your project",
        name:"description",
    },
    {
        type:"input",
        message:"Please provide instructions for installation",
        name:"installation",
    },
    {
        type:"input",
        message:"Please provide usage information",
        name:"usage",
    },
    {
        type:"input",
        message:"What does a user need to know when contributing to your repo?",
        name:"contributing",
    },
    {
        type:"input",
        message:"Please provide test instructions",
        name:"test",
    },
    {
        type:"list",
        message:"Please choose a license",
        choices: ["MIT", "Apache","GPL", "BSD", "None"],
        name:"license",
    },
    {
        type:"input",
        message:"What is your GitHub username?",
        name:"github",
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"email",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
