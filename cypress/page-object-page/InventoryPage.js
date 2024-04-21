/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />

import MainPage from "./MainPage.js";

class InventoryPage extends MainPage {

    get pageHeader() {
        return cy.get('div.app_logo');
    }
    get burgerMenu() {
        return cy.get('#react-burger-menu-btn');
    }
    get cartButton() {
        return cy.get('[data-test="shopping-cart-link"]');
    }
    get cartPageTitle() {
        return cy.get('[data - test="title"]');
    }

    get dropDown() {
        return cy.get('[data-test="product-sort-container"]');
    }
    get dropDownQuantity() {
        return cy.get('[data-test="product-sort-container"] > option');
    }
    get item() {
        return cy.get('[data-test="item-4-title-link"]');
    }
    
    selectItem() {
        this.item.click();
    }

    clickCartButton() {
        this.cartButton.click();
    }

    open() {
        super.open('/inventory.html');
    }
}

export default new InventoryPage();