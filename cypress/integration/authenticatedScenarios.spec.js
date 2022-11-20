describe('Scenarios where authentication is a pre-requirement', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.login()
  })

  it('CRUDs a note', () => {
    const faker = require('faker')
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes', { timeout: 15000 })

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes', { timeout: 15000 })

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes', { timeout: 15000 })
  })

  it('logs out', () => {
    cy.visit('/')
    cy.wait('@getNotes')
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('#email').should('be.visible')
  })

})