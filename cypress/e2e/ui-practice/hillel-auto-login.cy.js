/// <reference types="Cypress-xpath"/>

import credentials from '../../fixtures/credentials.json'

describe('Login with valid credentials', () => {

    it('Test 1 - Verifying log in with valid credentials', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.contains('Sign In').click();
        cy.get('h4.modal-title').should('be.visible');
        cy.get('input#signinEmail').type(credentials.email);
        cy.get('input#signinPassword').type(credentials.password);
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('h1').should('have.text','Garage')
    })
})
