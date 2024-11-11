describe('tile events should be tested', () => {
  it('react on click events', () => {
    cy.visit('http://localhost:8080/test/pages/index.html')
  
    cy.get('[id="myFirstComponent"]').should('be.visible').as('tile')
    
    cy.get('@tile').then(tile => {
        tile.get(0).addEventListener("click", cy.stub().as('clicked'));
    });


    cy.get('@tile')
			.click();

    cy.get("@clicked")
			.should("have.been.calledOnce");  

  })
})