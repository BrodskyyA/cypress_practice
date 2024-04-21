/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />

import LoginPage from "../page-object-page/LoginPage.js"
import InventoryPage from "../page-object-page/InventoryPage.js"
import ItemPage from "../page-object-page/ItemPage.js";

describe('Invertory Page tests', () => {
    let userData
    beforeEach(() => {
        cy.fixture('credentials.json').then((data) => {
            userData = data;
        })
    LoginPage.open();
    })

    it('Burger Menu is visible', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password); 
        InventoryPage.burgerMenu.should('be.visible')
    }) 

    it('Cart icon is visible', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password);
        InventoryPage.cartButton.should('be.visible')      
    }) 

    it('Cart page is open when clicking on cart ', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password);
        InventoryPage.clickCartButton()
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    }) 

    it('Dropdown is visible and contains 4 options', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password);
        InventoryPage.dropDown.should('be.visible')
        InventoryPage.dropDownQuantity.should('have.length', '4')
    }) 

    it('Verify the item page is opened when clicking on item', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password);
        InventoryPage.selectItem()
        ItemPage.backToProductsButton.should('be.visible')
    })
})