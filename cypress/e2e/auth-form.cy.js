/// <reference types="Cypress-xpath"/>

describe('Login functionality Automation tests', () => {
 
  it('Test 1 - Impossibility of login with incorrect password', () => {  
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('h2').should('have.text', 'Login Page')
    
    cy.get("input#username").type("tomsmith")
      .should('have.value', 'tomsmith')

    cy.get("input#password").type('blablabla')
    
    cy.get('button.radius').click()
    
    cy.get("div#flash")
    .should('be.visible')
    .should('have.text', '\n            Your password is invalid!\n            ×\n          ')
  })


  it('Test 2 - Impossibility of login with incorrect login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('h2').should('have.text', 'Login Page')

    cy.get("input#username").type("a.brodskyy@gmail.com")
      .should('have.value', 'a.brodskyy@gmail.com')

    cy.get("input#password").type(PassGen())

    cy.get('button.radius').click()

    cy.get("div#flash")
      .should('be.visible')
      .should('have.text', '\n            Your username is invalid!\n            ×\n          ')
  })

})

function PassGen() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}