/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Tela de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Adicionar item ao carrinho', () => {
        var qtd = 5
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(qtd)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', qtd +' × “Abominable Hoodie” foram adicionados no seu carrinho')
    });

    it.only('Adicionar item ao carrinho com comandos', () => {
        var qtd = 4
        cy.produtos('Abominable Hoodie', qtd)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtd)
        cy.get('.woocommerce-message').should('contain', qtd +' × “Abominable Hoodie” foram adicionados no seu carrinho')
    });
});