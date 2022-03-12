const getIntro = function ()
{
    return introQuestions = 
    [
        {
            type: 'list',
            message: "what type of employee do you want to register?",
            choices: ['Engineer', 'Intern', 'No more employees!'],
            name: 'employeeType',
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
    ];
};

const getEmployee = function ()
{
    return employeeQuestions = 
    [
        {
            type: 'input',
            message: "What is the employee's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the employee's id?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's email?",
            name: 'email',
        }
    ]
};

const getManager = function ()
{
    return managerQuestions = 
    [
        {
            type: 'input',
            message: "What is the managers's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the manager's id?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the managers's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'officeNumber',
        }
    ]
};

const getEngineer = function ()
{
    return engineerQuestions = 
    [
        ...getEmployee(),
        {
            type: 'input',
            message: "What is the engineer's Github username?",
            name: 'github',
        }
    ]
};

const getIntern = function ()
{
    return internQuestions = 
    [
        ...getEmployee(),
        {
            type: 'input',
            message: "What is the intern's school name?",
            name: 'school',
        }
    ]
};

module.exports = { getIntro, getEmployee, getManager, getEngineer, getIntern};