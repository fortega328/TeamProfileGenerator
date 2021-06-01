const generate = team => {

    const generateManager = Manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title">${Manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${Manager.getOffice()}</li>
            </ul>
        </div>
    </div>
        `;
    }
    const generateEngineer = Engineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h3 class="card-title">${Engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">Github Username: <a href="https://github.com/${Engineer.getGithub()} "target="_blank" >${Engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    }
    const generateIntern = Intern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h3 class="card-title">${Intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    }
    const html = [];

    html.push(team
        .filter(Employee => Employee.getRole() === "Manager")
        .map(Manager => generateManager(Manager))
    );
    html.push(team
        .filter(Employee => Employee.getRole() === "Engineer")
        .map(Engineer => generateEngineer(Engineer))
    );
    html.push(team
        .filter(Employee => Employee.getRole() === "Intern")
        .map(Intern => generateIntern(Intern))
    );

    return html.join("");

}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center">
                ${generate(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};