class Questions
{
    constructor()
    {
        this.intro = setIntro();
        
        this.employee = setEmployee();

        this.manager = setManager();

        this.engineer = setEngineer();

        this.intern = setIntern();
    }

    static #setIntro()
    {
        const introQuestions = 
        [
            {
                type: 'list',
                message: "what type of employee do you want to register?",
                choices: ['Manager', 'Engineer', 'Intern'],
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
        ]
    }

    static #setEmployee()
    {
        const employeeQuestions = 
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
    }

    static #setManager()
    {
        const managerQuestions = 
        [
            ...employeeQuestions,
            {
                type: 'input',
                message: "What is the employee's office number?",
                name: 'officeNumber',
            },
        ]
    }

    static #setEngineer()
    {
        const managerQuestions = 
        [
            ...employeeQuestions,
            {
                type: 'input',
                message: "What is the employee's Github username?",
                name: 'github',
            },
        ]
    }

    static #setIntern()
    {
        const managerQuestions = 
        [
            ...employeeQuestions,
            {
                type: 'input',
                message: "What is the employee's school name?",
                name: 'school',
            }
        ]
    }

    static getIntro()
    {
        return introQuestions;
    }

    static getEmployee()
    {
        return employeeQuestions;
    }

    static getManager()
    {
        return managerQuestions;
    }

    static getEngineer()
    {
        return engineerQuestions;
    }

    static getIntern()
    {
        return internQuestions;
    }
}