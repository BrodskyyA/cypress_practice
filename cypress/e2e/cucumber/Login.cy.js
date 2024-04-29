import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the HomePage', () => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto',
        }
    });
});

When('Login form is opened', () => {
    cy.get('.btn.btn-outline-white.header_signin').click();
});

When('I enter {string} email', (email) => {
    cy.get('#signinEmail').type(email);
});

When('I enter {string} password', (password) => {
    cy.get('#signinPassword').type(password);
});

When('I click on the Login button', () => {
    cy.get('div.modal-footer.d-flex.justify-content-between > button.btn.btn-primary').click(); 
});

Then('I should be on the GaragePage', () => {
    cy.get('h1').contains('Garage').should('be.visible');
});

When ('I leave the Email and Password fields empty', () => {
    cy.get('#signinEmail').should('be.empty');
    cy.get('#signinPassword').should('be.empty');
});

Then ('Login button should be disabled', () => {
cy.get('div.modal-footer.d-flex.justify-content-between > button.btn.btn-primary').should('have.attr', 'disabled');
});

Then ('I should see an error message', () => {
    cy.get('p.alert.alert-danger').should('contain.text', 'Wrong email or password');
});