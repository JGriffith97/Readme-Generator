// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'fileName',
    message: 'What would you like to name the README?'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'linkedIn',
    message: 'What is your LinkedIn URL?',
  },  
];

// TODO: Create a function to write README file
// Append? or Write file?
const writeToFile = ({fileName, name, email, github, linkedIn}) => 
`# This is a Weather Dashboard for the Module 6 Challenge of the UofU Coding Bootcamp.

## The goal of this assignment was to build a weather app utilizing the OpenWeatherMap API to make multiple fetch calls to display information to the DOM. This was completed using HTML, JavaScript, jQuery, Moment.js, and Bootstrap.

Screenshot: ![Site Screenshot](./Screenshot/Weather%20Dashboard%20Screenshot.jpeg)

>**Open Code Files:**
>
>HTML: [HTML](./index.html)
>
>CSS: [CSS](./Assets/css/style.css)
>
>Script: [Script](./Assets/js/script.js)

Live Site: Wait`;

inquirer
  .prompt(questions)
    .then((answers) => {
      
    })


// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();

//----------------------------------------------------------------------------------


// Not sure if I'll need this yet.
// module.exports = {
//   questions
// }



// For future reference, just so I can hot-copy/paste
// https://www.linkedin.com/in/jayden-griffith-a3b7b9217/
// https://github.com/JGriffith97