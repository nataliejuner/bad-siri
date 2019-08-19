/// <reference types="Cypress" />
describe('Goes to site', () => {
	it('visits localhost and types question', () => {
		cy.visit('http://localhost:3000/')
		cy.get('h1').should('contain', 'Bad Siri')
		cy.get('[id="question"]').should('be.visible')
		cy.get('[id="question"]').type('closest pizza place?')
	})
})