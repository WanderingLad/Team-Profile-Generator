const inquirer = require('inquirer');
const jest = require('jest');

const Questions = require('./lib/Questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const indexJS = require('./dist/scripts/index')

async function init()
{
    let employees = [];
    let stop = false;
    
    try
    {
        do
        {
            let ans = await inquirer.prompt(Questions.getIntro());

            switch(ans.employeeType)
            {
                case 'Manager':
                    let man = await inquirer.prompt(Questions.getManager());
                    let manager = new Manager(man.name, man.id, man.email, man.officeNumber);
                    employees = [...employees, manager];
                    break;
                
                
                case "Engineer":
                    let eng = await inquirer.prompt(Questions.getEngineer());
                    let engi = new Engineer(eng.name, eng.id, eng.email, eng.github);
                    employees = [...employees, engi];
                    break;
                
                case "Intern":
                    let int = await inquirer.prompt(Questions.getIntern());
                    let inte = new Intern(int.name, int.id, int.email, int.school);
                    employees = [...employees, inte];
                    break;

                default:
                    console.log("That's All folks!");
                    stop = true;
                    indexJS.setArray(employees);
            }

            if(ans.employeeType === 'No more employees!')
            {
                stop = true;
            }
            
        }while(!stop);
    }
    catch (error) 
    {
        console.log("error: " + error);
    }
}

init()