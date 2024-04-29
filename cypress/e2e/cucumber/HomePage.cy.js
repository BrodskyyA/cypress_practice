import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the HomePage', () => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto',
        }
    });
});

Then('I should see 5 social media icons present:', () => {
    cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'https://www.facebook.com/Hillel.IT.School');
    cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 'https://t.me/ithillel_kyiv');
    cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
    cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'https://www.instagram.com/hillel_itschool/');
    cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'https://www.linkedin.com/school/ithillel/');
});

When('I click on the Sign Up button', () => {
    cy.get('button.hero-descriptor_btn.btn.btn-primary').click();
});

Then('I should see the Sign Up form', () => {
    cy.get('app-signup-modal').should('be.visible');
});

When('I click on the Sign In button', () => {
    cy.get('.btn.btn-outline-white.header_signin').click();
});

Then('I should see the Sign In form', () => {
    cy.get('app-signin-modal').should('be.visible');
});