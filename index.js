const inquirer = require('inquirer');
const Engineer = require("./library/Engineer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const fs = require('fs');
const path = require("path");
const generateTeam = require('./src/page-template.js');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Employees = [];

// Question Paths 
function managerQuestions(){

    inquirer.prompt([

    {
        type: "input",
        message: "Manager name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your ID, please."}},
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "Office Number?",
        name: "officeNum",
        validate: (value)=> { if (value){return true} else {return "Input the Office Number, please."}},
    }, 
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    ]).then(function(answers){
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
        Employees.push(newManager);
        console.log("Added new Manager");
        

        if (answers.action === 'Add Engineer'){
            engineerQuestions();
        } 
        if (answers.action === 'Add Intern'){
            internQuestions();
        }
        if (answers.action === "Finish Building Team"){
            generateHTML();
            
        }
})};

function engineerQuestions(){

    inquirer.prompt([
 
    {
        type: "input",
        message: "Engineer name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your Employee ID, please."}},
    },
    {
        type: "input",
        message: "Email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "GitHub Usernmame?",
        name: "github",
        validate: (value)=> { if (value){return true} else {return "Input your GitHub Username, please."}},
    },
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    
]).then(function(answers){
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    Employees.push(newEngineer);
        console.log("Added new Engineer");
    if (answers.action === 'Add Engineer'){
        engineerQuestions();
    } 
    if (answers.action === 'Add Intern'){
        internQuestions();
    }
    if (answers.action === "Finish Building Team"){
        generateHTML();
        
    }
})};

function internQuestions(){
    
    inquirer.prompt([
    {
        type: "input",
        message: "Intern Name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your Employee ID, please."}},
    },
    {
        type: "input",
        message: "Email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "School this Intern is currently enrolled in?",
        name: "school",
        validate: (value)=> { if (value){return true} else {return "Input the school name, please."}},
    },
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    
]).then(function(answers){
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
    Employees.push(newIntern);
    console.log("Added new Intern");
    if (answers.action === 'Add Engineer'){
        engineerQuestions();
    } 
    if (answers.action === 'Add Intern'){
        internQuestions();
    }
    if (answers.action === "Finish Building Team"){
        generateHTML();
        
    }
})};


function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
    fs.writeFileSync(outputPath, generateTeam(Employees), "utf-8");
  }

  function generateHTML(){
    buildTeam();
    console.log("Team Built");

}

// function call to initialize program
managerQuestions();