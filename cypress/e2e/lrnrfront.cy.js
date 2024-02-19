describe('it connects to the front end', () => {
    it('loads the home page', () => {
      cy.visit('localhost:3000/')
  
      cy.contains('Account')
      cy.contains('Quiz Generation')
      cy.contains('Quiz Generation').click()
      
    })
  })

  describe('it loads the quiz generation page', () => {
    it('clicks on the quiz generation page', () => {
      cy.visit('localhost:3000/')
      cy.contains('Quiz Generation').click()
  
      cy.url().should('include', '/quiz-generation')
  
    })
});
  

describe('it loads the account page', () => {
    it('clicks on the account page', () => {
      cy.visit('localhost:3000/')
      cy.contains('Account').click()
  
      cy.url().should('include', '/account')
  
    })
});

// test that checks for responsiveness
describe('Responsive Check - Quiz Generation Page', () => {
    it('should navigate to the Quiz Generation page and check responsiveness', () => {
    
      cy.viewport(320, 480);
  
      // Visit the target page
      cy.visit('http://localhost:3000/'); 
      cy.get('.navbar-toggler').click(); 
  
      cy.contains('Quiz Generation').should('be.visible').click();

      cy.get('form').should('be.visible');
    });
    });