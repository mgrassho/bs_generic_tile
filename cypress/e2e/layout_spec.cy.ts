describe('Tiles layout behavior', () => {
  it('should behave accordingly', () => {
    cy.visit('http://localhost:8080/test/pages/index.html')
    cy.viewport(450, 550)


    cy.get('[id="myFirstComponent"]').should('be.visible')
    cy.get('.grid_layout').should('has.css', 'grid-template-columns', '176px')
  })
})