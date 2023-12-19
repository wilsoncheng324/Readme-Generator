// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";


// TODO: Create an array of questions for user input
const questions = [
    // Project title
    {
        type: "input",
        message: "What is your name?",
        name: "name", 
    },
    {
        type: "input",
        message: "Please enter your project title",
        name: "title",  
    },
    // Project Description
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    // Table of content 
   
    
    // Installation
    {
        type: "input",
        message: "Installation, \nWhat are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    // Usage
    {
        type: "input",
        message: "Usage, \nProvide instructions and examples for use.",
        name: "usage",
    },
    // Credits
    {
        type: "input",
        message: "Credits, \nList your collaborators, if any, with links to their GitHub profiles.",
        name: "credits",
    },
    // license
    {
        type: "list",
        message: "Choose your license: ",
        choices: [
            "MIT",
            "Apache 2.0 License",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0",
            "Unlicense"
        ],
        name: "license",
    },
    // Contributing
    {
        type: "input",
        message: "",
        name: "contributing",
    },
    // Tests
    {
        type: "input",
        message: "",
        name: "tests",
    },
    // Questions
    // Github username
    {
        type: "input",
        message: "Enter your Github username:",
        name: "username",
    },
    // Email address
    {
        type: "input",
        message: "Enter your Github username:",
        name: "email",
    },

];

// License generate function

function generateLicense(license) {
    // MIT License
    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        // Apache 2.0 License
      } else if (license === "Apache 2.0 License") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        // IBM Public License Version 1.0
      } else if (license === "IBM Public License Version 1.0") {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
        // Mozilla Public License 2.0
      } else if (license === "Mozilla Public License 2.0") {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        // Unlicense
      } else {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      }
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileText = "";
    var fileName = `${data.title}-README.md`;
            fileText += `# ${data.name}'s ${data.title}\n\n`;
            fileText += `${generateLicense(data.license)}\n\n`
            fileText += `## Description \n\n${data.description}\n\n`;
            fileText += `## Table of content \n\n`;
            fileText += `- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n\n`;
            fileText += `## Installation\n\n${data.installation}\n\n`
            fileText += `## Usage\n\n${data.usage}\n\n`
            fileText += `## Credits\n\n${data.credits}\n\n`
            fileText += `## License ${generateLicense(data.license)}\n\n`
            fileText += `Notice: This application is covered under the ${data.license} License\n\n`; 
            fileText += `## Contributing\n\n${data.contributing}\n\n`
            fileText += `## Tests\n\n${data.tests}\n\n`
            fileText += `## Questions\n\nHave amy question? Click the link below to contact me.\n\n`
            fileText += `- [Link to my Github](https://github.com/${data.username})(https://github.com/${data.username})\n`
            fileText += `- <a href="${data.email}">${data.email}`
    
    fs.writeFile(fileName, fileText, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', data);
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
    