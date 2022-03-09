const inquirer = require('inquirer');
const jest = require('jest');

const questions = 
[
    {    
        type: 'input',
        message: "What is your project's title?",
        name: 'title',
        validate: function (answer)
        {
            if(answer)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    } ,
    {
        type: 'list',
        message: "Choose a license type for your project.",
        choices: ['I need to work in a community.', 'I want it simple and permissive.', 'I care about sharing improvements.', "My project isn't a software.", 'I do not want to choose'],
        name: 'licenses',
        validate: function (answer)
        {
            if(answer)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
]

async function init()
{
    try
    {
        const ans = await inquirer.prompt(questions);
        console.log(ans);
    }
    catch (error) 
    {
        console.log("error: " + error);
    }
}

init()