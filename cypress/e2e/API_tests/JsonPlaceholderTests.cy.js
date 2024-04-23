//Написати 5 різних API тестів для сервсіу https://jsonplaceholder.typicode.com використовуючи cy.request або будь-який плагін

/// <reference types="Cypress-xpath"/>
/// <reference types="cypress" />


describe('Verify the Username by GET request', () => {
    it('Verify Username by GET request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[3].username).to.eq('Karianne'); 
            expect(response.body[3].email).to.eq('Julianne.OConner@kory.org'); 
            expect(response.body[3].address.geo.lat).to.eq('29.4572'); 
            expect(response.body[3].address.geo.lng).to.eq('-164.2990'); 
        });
    });
});

describe('Verify post title by GET request', () => {
    it('Verify post title by GET request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[0].title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
            expect(response.body[0].title).to.eq("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
        });
    });
});

describe('Verify creating a new Post by POST request', () => {
    it('Verify creating a new Post by POST request', () => {
        const newPost = {
            title: '101 Post',
            body: 'Test body text',
            userId: 1,
        };
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body.id).to.eq(101);
            expect(response.body.title).to.eq('101 Post');
        });
    });
});

describe('Verify adding a new Photo by POST request', () => {
    it('Verify adding a new Photo by POST request', () => {
        const newPhoto = {
            albumId: 100,
            id: 5001,
            title: 'beautiful photo',
            url: 'https://via.placeholder.com/600/2786d2',
            thumbnailUrl: 'https://via.placeholder.com/150/2786d2'
        };
    cy.request('POST', 'https://jsonplaceholder.typicode.com/photos', newPhoto).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body.id).to.eq(5001);
            expect(response.body.title).to.eq('beautiful photo');
        });
    });
});

describe('Verify changing album name by PUT request', () => {
    it('Verify changing album name by PUT request', () => {
        const newAlbumTitle = {
            userId: 1,
            id: 1,
            title: 'New beautiful title',
        };
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/albums/1', newAlbumTitle).then((updateResponse) => {
            expect(updateResponse.status).to.eq(200);
            expect(updateResponse.body.title).to.eq('New beautiful title');
        });
    });
});




