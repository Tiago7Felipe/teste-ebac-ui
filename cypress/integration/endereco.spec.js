/// <reference types = 'cypress' />


describe('Funcionalidade endereços - endereço faturamento', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
       })
    });

    it('Deve realizar o cadastro do endereçe de faturamento com sucesso', () => {
        //login
        
    });
});