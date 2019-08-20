/// <reference types="Cypress" />
describe('Goes to site', () => {
	it('visits localhost and types question', () => {
		cy.visit('http://localhost:3000/')
		cy.get('h1').should('contain', 'Bad Siri')
		cy.get('[id="question"]').should('be.visible')
		cy.get('[id="question"]').type('closest pizza place?')
	})
	it('checks that not asking in question form does nothing', () => {
		cy.get('[id="question"]').should('be.empty')
		cy.get('[id="question"]').type('beer')
		cy.scrollTo('bottom')
		cy.get('span[class="gcsc-find-more-on-google-query"]').should('include', 'beer')
	})
})