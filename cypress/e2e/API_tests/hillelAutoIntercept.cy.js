//Сайт https://qauto.forstudy.space/

//Напишіть степи для авторизації у юзера та відкриття сторінки Profile
//Використовуючи cy.intercept зробіть підміну відповіді сервера, щоб замість справжніх даних виводились:
//Name: Polar Bear
//Country: USA
//Date of birth: 11.11.2011
//Додайте перевірки, що відображаються саме ці дані.

/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />

import user from '../../fixtures/user.json'

describe('Intercept', () => {
    it('Interception', () => {
        cy.intercept('GET','https://qauto.forstudy.space/api/users/profile', (req) => {
            req.reply({
                status: 200,
                body: {
                    status: 'ok',
                    data: {
                        userId: 113005,
                        photoFilename: 'default-user.png',
                        name: 'Polar',
                        lastName: 'Bear',
                        dateBirth: '2011-11-11T00:00:00.000Z',
                        country: 'USA'
                    }
                }
            });
        }).as('profile');

        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });

        cy.contains('Sign In').click();
        cy.get('#signinEmail').type(user.email);
        cy.get('#signinPassword').type(user.password);
        cy.contains('Login').click();
        cy.get('.user-nav_toggle').click();
        cy.contains('.user-nav_link', 'Profile').click();

        // Wait for the intercepted request to complete and make assertions
        cy.wait('@profile').its('response.body.data').then(data => {
            console.log(data);
            expect(data.name).to.equal('Polar');
            expect(data.lastName).to.equal('Bear');
            expect(data.dateBirth).to.equal('2011-11-11T00:00:00.000Z');
            expect(data.country).to.equal('USA');

        // Assertions on the retrieved data
            cy.contains(data.name).should('be.visible');
            cy.contains(data.lastName).should('be.visible');
            cy.contains(data.country).should('be.visible');
            cy.contains('11.11.2011').should('be.visible');
        });
    });
});

