const inquirer = require('inquirer');
const jest = require('jest');

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