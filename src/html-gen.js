const { createEngineerCard, createManagerCard, createInternCard } = require('./card-gen')

const createTeam = team => {
  let cards = ''
  team.forEach(member => {
    switch (member.getRole()) {
      case 'Intern':
        cards += createInternCard(member)
        break
      case 'Engineer':
        cards += createEngineerCard(member)
        break
      case 'Manager':
        cards += createManagerCard(member)
        break
    }
  })
  const teamHTML = createHTML(cards)
  return teamHTML
};

const createHTML = teamCards => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
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
            <div class="team-area col-12 d-flex justify-content-center">
                ${teamCards}
            </div>
        </div>
    </div>
</body>

</html>
  `
}

module.exports = { createTeam };



