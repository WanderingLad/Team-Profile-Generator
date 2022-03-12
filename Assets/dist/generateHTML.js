const fs = require('fs');

const stream = fs.createWriteStream('./dist/index.html', {flags: 'a'});

const fileCreation = function fileCreation(employees)
{
    const emp = employees;

    const header = setHeader();

    stream.write(header);
}

function setHeader()
{
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Team Page Generator</title>
    </head>
    </html>
    `;
}

const resetIndex = function(){fs.writeFile('./dist/index.html', '', function (err) {if (err) throw err;})}

module.exports = { fileCreation, resetIndex};