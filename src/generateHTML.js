// genferate manager card
function generateManagerCard(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2 class="card-title
            "<h2>${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">

        <div class="card employee-card">
        <p class="card-text">ID: ${manager.id}</p>
        <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="card-text">Office number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

// generate engineer card
function generateEngineerCard(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2 class ${engineer.name}</h2>
                    <h3>Engineer</h3> <i class="material-icons">content_paste</i>
            </div>

                                        
            <div class="card-body">
                    p class= "id">ID: ${engineer.id} </p>
                    <p class= "email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class= "github">GitHub: < href="https:https:https:github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>    
    </div>
     `
};

// generate intern card
function generateInternCard(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2 class ${intern.name}</h2>
                    <h3>Intern</h3> <i class="material-icons">content_paste</i>
            </div>

                                        
            <div class="card-body">
                    p class= "id">ID: ${intern.id} </p>
                    <p class= "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class= "school">School: ${intern.school}</p>
            </div>
        </div>    
    </div>
     `
};

// generate HTML
function generateHTML(data) {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // call manager card
        if (role === "Manager") {
            const managerCard = generateManagerCard(employee);

            pageArray.push(managerCard);
        }

        // call engineer card
        if (role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);

            pageArray.push(engineerCard);
        }

        // call intern card
        if (role === "Intern") { // if the role is intern
            const internCard = generateInternCard(employee); // generate the intern card

            pageArray.push(internCard); // push the card to the pageArray
        }
    }

    const employeeCards = pageArray.join("") // join the cards together

    const generateTeam = generateTeamPage(employeeCards); // generate the team page
    return generateTeam;      // return the team page
}

// generate team page
function generateTeamPage(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${employeeCards}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = generateHTML; // export the generateHTML function