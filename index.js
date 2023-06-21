// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter Project Description",
        name:"description"
    },
    {
        type:"input",
        message:"Enter Project installation instructions",
        name:"installationInstructions"
    },
    {
        type:"input",
        message:"Enter Project usage information",
        name:"usageInformation"
    },
    {
        type:"input",
        message:"Enter Project contribution guidelines",
        name:"contributionGuidelines"
    },
    {
        type:"input",
        message:"Enter Project test instructions",
        name:"testInstructions"
    },
    {
        type:"input",
        message:"Enter your email address",
        name:"emailAddress"
    },
    {
        type:"list",
        message:"Enter Project license",
        name:"license",
        choices:["MIT","ISC","APACHE 2.0","GPL2.0","None"]
    },
    {
        type:"input",
        message:"Enter GitHub username",
        name:"GitHubUsername"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
        fs.writeFileSync("README.md",generateMarkdown(response),function(err){
            if(err)
            console.log(err)
        })
        console.log("Markdown complete")
    })
}

// Function call to initialize app
init();
