/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />

export default class MainPage {
    constructor() {
        this.baseUrl = 'https://www.saucedemo.com/';
    }
    open(url) {
        cy.visit(`${this.baseUrl}${url}`);
    }
}