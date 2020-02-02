describe('Login:', () => {
  it('Redirects to login when visit index', () => {
    cy.visit('/')
    cy.contains('button', 'Login')
  })
})
