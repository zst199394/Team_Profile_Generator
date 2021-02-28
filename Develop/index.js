// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./generateTeam.js');
// TODO: Create an array of questions for user input
let teamArray = [];
const questions1 = [
    {
        type: 'input',
        name: 'manager',
        message: 'Who is the team manager?',
    },
    {
        type: 'input',
        name: 'managerid',
        message: 'What is the team manager`s ID?',
    },
    {
        type: 'input',
        name: 'manageremail',
        message: 'What is the team manager`s email?',
    },
    {
        type: 'input',
        name: 'managerphone',
        message: 'What is the team manager`s office number?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would u like to add?',
        choices: ["Engineer","Intern","No,i have no more team member to add"]  
    }, 
];
const questions2 = [
    {
        type: 'input',
        name: 'engineer',
        message: 'What is the engineer`s name?',
    },
    {
        type: 'input',
        name: 'engineerid',
        message: 'What is the engineer`s id?',
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: 'What is the engineer`s email?',
    },
    {
        type: 'input',
        name: 'engineergithub',
        message: 'What is the engineer`s github username?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would u like to add?',
        choices: ["Engineer","Intern","No,i have no more team member to add"]  
    }, 

];
const questions3 =[
    {
        type: 'input',
        name: 'intern',
        message: 'What is the intern`s name?',
    },
    {
        type: 'input',
        name: 'internid',
        message: 'What is the intern`s id?',
    },
    {
        type: 'input',
        name: 'internemail',
        message: 'What is the intern`s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern`s school?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would u like to add?',
        choices: ["Engineer","Intern","No,i have no more team member to add"]  
    },
];
function startingPrompt() {
    console.log( "/////////Welcome to Team Generator! /////////");
    addManager();  
}

function addManager() {
inquirer
 .prompt(questions1)
 .then((answers) =>{
     switch(answers.role){
         case "Engineer":
             addEngineer();
             break;

         case "Intern":
             addIntern();
             break;
        case "No,i have no more team member to add":
            stopTeam();
            break;   
     };
    })
 }
 
function addEngineer(){
inquirer
 .prompt(questions2)
 .then((answers) =>{
     const name = answers.engineer
     const id = answers.engineerid
     const email = answers.engineeremail
     const github = answers.engineergithub
     const teamMember = new Engineer(name, id, email, github)
     teamArray.push(teamMember)  
    switch(answers.role){
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
       case "No,i have no more team member to add":
           stopTeam();
           break; 
          
    };
})
 }

 function addIntern(){
 inquirer
 .prompt(questions3)
 .then((answers) =>{
    const name = answers.intern
    const id = answers.internid
    const email = answers.internemail
    const school = answers.school
    const teamMember = new Intern(name, id, email, school)
    teamArray.push(teamMember) 
    switch(answers.role){
        case "Engineer":
            addEngineer();
            break;

        case "Intern":
            addIntern();
            break;
       case "No,i have no more team member to add":
           stopTeam();
           break;   
    };
})
 }

 function stopTeam(){
     fs.writeFile('team.html',generateTeam(answers),(err)=>
     err ? console.logg(err) : console.log('Successfully create ---team.html--- !')
     );

 }

startingPrompt();
function init() {}

// Function call to initialize app
init();
