/// <reference types="Cypress-xpath"/>

describe('The "hillelauto" main page testing', () => {
     
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
            username: 'guest',
            password: 'welcome2qauto',
            }
        })
    })

    it('TestSuite 1 - Verify social links exist and correspond to the social media icon type', () => {       
        cy.get('div.contacts_socials.socials').children()
            .should('have.attr', 'href')
        cy.get('div.contacts_socials.socials').children().invoke('attr','href')
            .should('not.be.empty')
        cy.get('a.socials_link').eq(0).invoke('attr', 'href')
            .should('contain', 'https://www.facebook.com/Hillel.IT.School');
        cy.get('a.socials_link').eq(1).invoke('attr', 'href')
            .should('contain', 'https://t.me/ithillel_kyiv');
        cy.get('a.socials_link').eq(2).invoke('attr', 'href')
            .should('contain', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        cy.get('a.socials_link').eq(3).invoke('attr', 'href')
            .should('contain', 'https://www.instagram.com/hillel_itschool/');
        cy.get('a.socials_link').eq(4).invoke('attr', 'href')
            .should('contain', 'https://www.linkedin.com/school/ithillel/');
    })

    it('Test 2 - Verify the login form appears when clicking the "Sign In" button" ', () => { 
        cy.get('button.btn.btn-outline-white.header_signin').click()
        cy.get('div.modal-content').should('be.visible')
        cy.get('h4.modal-title').should('have.text', 'Log in')
    })

    it('Test 3 - Verify the registration form appears when clicking the "Sign Up" button', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').click()
        cy.get('div.modal-content').should('be.visible')
        cy.get('h4.modal-title').should('have.text', 'Registration')
    })
})
