Cypress.Commands.add('login', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD'),
  url = '/login',
  { cacheSession = true } = {}
) => {
  const login = () => {
    cy.visit(url)
    cy.get('#email').type(username, { log: false })
    cy.get('#password').type(password, { log: false })
    cy.contains('button', 'Login').click()
    cy.contains('h1', 'Your Notes').should('be.visible')
  }

  if(cacheSession) {
    cy.session([username, password], login)
  } else {
    login()
  }
})