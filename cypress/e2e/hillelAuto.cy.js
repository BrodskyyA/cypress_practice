/// <reference types="Cypress-xpath"/>

describe('Adding Auto functionality', () => {

    it('Test 1 - Verifying the possibility of adding auto as a guest', () => {
        cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto',
        }
    })
        cy.get('h1.hero-descriptor_title.display-2').should('have.text', 'Do more!')
        cy.get('button.header-link.-guest').click(),
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage')
        cy.get('button.btn.btn-primary').click()
        cy.get('h4.modal-title').should('have.text','Add a car')
        cy.get('select#addCarBrand').select('Audi')
        cy.get('select#addCarModel').select('TT')
        cy.get('input#addCarMileage').type(100000)
        cy.get('div.modal-footer.d-flex.justify-content-end > button.btn.btn-primary').click()
        cy.get('div.car.jumbotron')
        .should('be.visible')
        cy.get('p.car_name.h2').should('have.text', "Audi TT")
    })
})
