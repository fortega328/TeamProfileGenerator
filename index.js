const Employee = require("./library/Employee");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");
const team = [];

const inquirer = require("inquirer");
inquirer.prompt({
    type: 'list',
    name: 'direction',
    choices: ['add manager', 'add intern', 'add engineer', 'create team'],
    message: "please select your team member..."
}).then(answer =>{
    if(answer.direction=== 'add manager'){
        askManager();
    }else if(answer.direction === 'add intern'){
        askIntern();
    }else if(answer.direction === 'add engineer'){
        askEngineer();
    }else{
        console.log("Good Bye");
        process.exit()
    }
})

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your managers name?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter valid answer";
    },
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your managers ID number?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter valid answer";
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your managers email address?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter valid answer";
    },
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your managers office number?",
    validate: (answer) => {
      if (answer !== "") {
        return true;
      }
      return "Please enter valid answer";
    },
  },
];
const internQuestions = [
    {
      type: "input",
      name: "internName",
      message: "What is your interns name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "internId",
      message: "What is your interns ID number?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your interns email address?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is your interns School?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
  ];
const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineers name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is your engineers ID number?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineers email address?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is your engineers Github?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter valid answer";
      },
    },
  ];

const askManager = ()=>{
    inquirer.prompt(managerQuestions)
    .then(answer =>{
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
        team.push(manager);
    })
}
const askIntern = ()=>{
    inquirer.prompt(internQuestions)
    .then(answer =>{
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        team.push(intern)
        console.log('/n')
    })
}
const askEngineer = ()=>{
    inquirer.prompt(engineerQuestions)
    .then(answer =>{
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        team.push(engineer);
        console.log(team)
    })
}
