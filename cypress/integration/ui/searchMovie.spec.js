/// <reference types="cypress" />

describe('Search for a movie', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.intercept('GET', '/3/search/movie?**Marvel').as('getMovie')
    })
    it('Search for a movie successfully', () => {
        cy.getByClass('searchBox').should('be.enabled').type('Marvel')
        cy.wait('@getMovie');
    });
});