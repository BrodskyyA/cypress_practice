/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />

import LoginPage from "../../page-object-page/LoginPage.js"
import InventoryPage from "../../page-object-page/InventoryPage.js"
import ItemPage from "../../page-object-page/ItemPage.js";

describe('Item page tests', () => {
    let userData;
    beforeEach(() => {
        cy.fixture('credentials.json').then((data) => {
            userData = data;
        })
        LoginPage.open();
    })

/* Перевірити, що присутні картинка, опис, ціна та назва товару. */

    it('Verify the item card is fulfield', () => {
            LoginPage.login(userData.userName.userNameOk, userData.password);
            InventoryPage.selectItem()
            ItemPage.productName.should('have.text', 'Sauce Labs Backpack')
            ItemPage.productDescription.should('not.be.empty')
            ItemPage.productImg.invoke('attr', 'src')
                .should('contain', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
            ItemPage.productPrice.should('have.text', "$29.99")
    })
 
/*    Перевірити, що після кліку на "Add to cart" з'являється кнопка Remove */
/*     Перевірити, що після кліку на Remove з'являється кнопка Add to Cart */

it('Verify the "Add to cart" button is changing when clicking', () => {
        LoginPage.login(userData.userName.userNameOk, userData.password);
        InventoryPage.selectItem()
        ItemPage.clickAddToCartButton()
        ItemPage.removeToCartButton.should('be.visible')
        ItemPage.clickRemoveToCartButton()
        ItemPage.addToCartButton.should('be.visible')
    })
})