// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions1 = [
    {
        type: 'input',
        name: 'manager',
        message: 'Who is the team manager?',
    },
    {
        type: 'input',
        name: 'manager-id',
        message: 'What is the team manager`s ID?',
    },
    {
        type: 'input',
        name: 'manager-email',
        message: 'What is the team manager`s email?',
    },
    {
        type: 'input',
        name: 'manager-phone',
        message: 'What is the team manager`s office number?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would u like to add?',
        choices: ["Engineer","Intern"]  
    }, 
];
const questions2 = [
    {
        type: 'input',
        name: 'engineer-name',
        message: 'What is the engineer`s name?',
    },
    {
        type: 'input',
        name: 'engineer-id',
        message: 'What is the engineer`s id?',
    },
    {
        type: 'input',
        name: 'engineer-email',
        message: 'What is the engineer`s email?',
    },
    {
        type: 'input',
        name: 'engineer-github',
        message: 'What is the engineer`s github username?',
    },
    {
        type: 'input',
        name: 'intern-name',
        message: 'What is the intern`s name?',
    },
    {
        type: 'input',
        name: 'intern-id',
        message: 'What is the intern`s id?',
    },
    {
        type: 'input',
        name: 'intern-email',
        message: 'What is the intern`s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern`s school?',
    },
];
inquirer
 .prompt(questions1) 
 
 .prompt(questions2)
 .prompt(questions3)
 .then((answers) =>{
     fs.writeFile('team.html',generateTeam(answers),(err)=>
     err ? console.logg(err) : console.log('Successfully create ---team.html--- !')
     );

 });

function init() {}

// Function call to initialize app
init();
