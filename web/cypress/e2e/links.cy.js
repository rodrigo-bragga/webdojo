describe('Links abrind onova guia/janela', () => {
    it('Validando o atributo do link do Instagram', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target black', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
        //essa forma de acessar um link com _blank
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('1. Aceitação dos Termos')
            .should('be.visible')
    })

})