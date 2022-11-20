Cypress.Commands.add('createNote', (note, attachFile = false) => {
  cy.visit('/notes/new')
  cy.get('#content').type(note)

  if (attachFile) {
    cy.get('#file').attachFile('example.json')
  }

  cy.contains('button', 'Create').click()

  cy.contains('.list-group-item', note).should('be.visible')
})