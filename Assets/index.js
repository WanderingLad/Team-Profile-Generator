const inquirer = require('inquirer');
const jest = require('jest');
const Questions = require('./lib/Questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


async function init()
{
    try
    {
        const ans = await inquirer.prompt(Questions.getIntro());
        console.log(ans);

        const man = await inquirer.prompt(Questions.getManager());
        const manager = new Manager(man.name, man.id, man.email, man.officeNumber);
        console.log(manager)

        const eng = await inquirer.prompt(Questions.getEngineer());
        const engi = new Engineer(eng.name, eng.id, eng.email, eng.github);
        console.log(engi);

        const int = await inquirer.prompt(Questions.getIntern());
        const inte = new Intern(int.name, int.id, int.email, int.school);
        console.log(inte);
    }
    catch (error) 
    {
        console.log("error: " + error);
    }
}

init()