Cypress.Commands.add("getByClass", (selector, ...args) => {
    return cy.get(`.${selector}`, ...args)
})