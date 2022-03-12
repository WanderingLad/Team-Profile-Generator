const fs = require('fs');

const stream = fs.createWriteStream('./dist/index.html', {flags: 'a'});

const fileCreation = function fileCreation(employees)
{
    const emp = employees;

    console.log(emp);

    setHead();

    setBody(emp);
}

function setHead()
{
    stream.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page Generator</title>
    <link rel="stylesheet" type="text/css" href="./styles/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    </html>
    `);
}

function setBody(employeeList)
{
    stream.write(`
    <body>
    <header>
    This is a header
    </header>
    <ul class="flex-container">
    `);
    employeeList.forEach(emp => 
        {
            if(emp.role === "Manager")
            {
                stream.write(createCardMan(emp));
            }
            else if(emp.role === "Engineer")
            {
                stream.write(createCardEng(emp));
            }
            else if(emp.role === "Intern")
            {
                stream.write(createCardInt(emp));
            }
        })
        
    stream.write(`
    </ul>
    </body>
    `);
}

function createCardMan(emp)
{
    return `
    <li>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${emp.name}</h5>
                <p class="card-text">${emp.role}</p>
                <a href="mailto:${emp.email}" class="btn btn-primary">${emp.email}</a>
                <p class="card-text">${emp.officeNumber}</p>
            </div>
        </div>
    </li>
    `
}

function createCardEng(emp)
{
    return `
    <li>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${emp.name}</h5>
                <p class="card-text">${emp.role}</p>
                <a href="mailto:${emp.email}" class="btn btn-primary">${emp.email}</a>
                <a href="github.com/users/${emp.github}" class="btn btn-primary">${emp.github}</a>
            </div>
        </div>
    </li>
    `
}

function createCardInt(emp)
{
    return `
    <li>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${emp.name}</h5>
                <p class="card-text">${emp.role}</p>
                <a href="mailto:${emp.email}" class="btn btn-primary">${emp.email}</a>
                <p class="card-text">${emp.school}</p>
            </div>
        </div>
    </li>
    `
}

const resetIndex = function(){fs.writeFile('./dist/index.html', '', function (err) {if (err) throw err;})}

module.exports = { fileCreation, resetIndex};