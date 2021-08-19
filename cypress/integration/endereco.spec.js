/// <reference types = 'cypress' />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade endereços - endereço faturamento', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
       })
    });

    it('Deve realizar o cadastro do endereçe de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('André', 'Antonio', 'Itau','Brasil','rua A', '555', 'Bonfim','minas','30120-040', '3198653212','teste@teste.com.br')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        
    });

    it.only('Deve realizar o cadastro do endereço de faturamento com sucesso - arquivo', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].rua,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].uf,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
        
    });
});