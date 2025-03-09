describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')
    
    cy.contains('Dashboard')
  })
  
  
  it('Não deve logar com senha inválida', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana321')
    
    cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
  })
  
  
  it('Não deve logar com email não cadastrado', () => {
    cy.iniciar()
    cy.submeterLogin('emailerrado@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})