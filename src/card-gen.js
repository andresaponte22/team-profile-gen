const createEngineerCard = function (engineer) {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${engineer.name}</h2>
      <h4>Engineer💻</h4>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID:${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
      </ul>
  </div>
</div>
  `
}

const createInternCard = function (intern) {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${intern.name}</h2>
      <h4>Intern📁</h4>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID:${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
      </ul>
  </div>
</div>
  `
}

const createManagerCard = function (manager) {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.name}</h2>
      <h4>Manager👔</h4>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office number:${manager.officeNumber}</li>
      </ul>
  </div>
</div>
  `
}

module.exports = { createEngineerCard, createInternCard, createManagerCard }