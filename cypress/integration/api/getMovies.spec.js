/// <reference types="cypress" />

const tmbdUrl = Cypress.env("apiUrl")
const key = Cypress.env("key")


describe('GET - Movies', () => {
    it('GET a list of movies', () => {

        const dataBase = {
            listMovie: 'marvel',
        }

        cy.request('GET', `${tmbdUrl}/search/movie?api_key=${key}&query=${dataBase.listMovie}`).then(response => {

            Cypress.log({
                name: "duration",
                displayName: "DURATION",
                message: [`⏳ ${response.duration}`]
            });

            expect(response.status).to.eq(200)
            expect(response.body.page).to.be.a("number").greaterThan(0)
            if (response.body.total_results > 0) expect((response.body.results[0].original_title).toUpperCase()).to.contains((dataBase.listMovie).toUpperCase())
        })
    })

    it('GET a specific movie', () => {

        const dataBase = {
            idMovie: 299537
        }

        cy.request('GET', `${tmbdUrl}/movie/${dataBase.idMovie}?api_key=${key}`).then(response => {

            const log = Cypress.log({
                name: "duration",
                displayName: "DURATION",
                message: [`⏳ ${response.duration}`]
            });

            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(dataBase.idMovie)
            expect(response.body.genres).to.be.a("array")
            cy.wrap(response.body.genres).each($el => {
                expect($el.id).to.be.a("number")
                expect($el.name).to.be.a("string")
            })
        })
    });

    it('GET without a Key', () => {

        const dataBase = {
            listMovie: 'marvel',
        }

        cy.request({
            method: 'GET',
            url: `${tmbdUrl}/search/movie?api_key=&query=${dataBase.listMovie}`,
            failOnStatusCode: false
        }).then(response => {

            Cypress.log({
                name: "duration",
                displayName: "DURATION",
                message: [`⏳ ${response.duration}`]
            });

            expect(response.status).to.eq(401)
            expect(response.body.success).to.be.eq(false)
            expect(response.body.status_message).to.be.eq("Invalid API key: You must be granted a valid key.")
        })
    })
});