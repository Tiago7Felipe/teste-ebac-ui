/// <reference types = "cypress"/>
var faker = require('faker');

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('Realizar o pré cadastro com sucesso', () => {
        let name = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email(name)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('!teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(name)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });
});