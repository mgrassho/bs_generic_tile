describe('tile should be visible', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/test/pages/index.html')
  
    cy.get('[title="Title 1"]').should('be.visible')
    cy.get('[title="Title 1"] > ui5-icon').should('be.visible').and
    cy.get('[id="myFirstComponent"]').should('have.attr', 'subtitle').and('not.be.empty')
    cy.get('[id="myFirstComponent"]').and('have.attr', "footer").and('not.be.empty')
    cy.get('[id="myFirstComponent"]').and('have.attr', "title").and('not.be.empty')
    cy.get('[id="myFirstComponent"]').should('have.css', 'font-family', '"72", "72full", Arial, Helvetica, sans-serif')

    cy.get('[id="myThirdComponent"]')
      .shadow()
      .find('.generic_tile_header')
      .should('exist')
      .and('have.text', 'Title 2nd Row 3 with long titleSubtitle')
      
    cy.get('[id="myFourthComponent"]')
      .shadow()
      .find('.gth_subtitle')
      .should('exist')
      .and('have.text', 'Subtitle is extremly long')
      .and('have.css','text-overflow', 'ellipsis'
      )
  })
})