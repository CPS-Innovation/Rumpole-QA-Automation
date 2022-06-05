describe('the app', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/');
  });

  it('opens', () => {
    cy.contains('AutomationUser.ServiceTeam2@cps.gov.uk');
    cy.contains('Privacy');
    cy.contains('Search');
  });

  // Invalid URN test
  it('Invalid Urn', () => {
    cy.get('.govuk-input').type('Invalid URN');
    cy.get('[data-testid="button-search"]').click();
    cy.contains('Please enter a valid URN'); // verify correct error is displayed
  });

  it('Valid Urn Test', () => {
    //Valid URN Test

    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.wait(5000);
    cy.contains("We've found"); // verify correct error is displayed
    
  });

  it('Search for multiple URN', () => {
    //Valid URN Test

    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.contains("We've found"); // verify correct error is displayed
    cy.get('[data-testid="link-back-link"]').click();//go back to search page
    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('19UN8765432'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.contains("We've found"); // verify correct error is displayed
    
  });



});
