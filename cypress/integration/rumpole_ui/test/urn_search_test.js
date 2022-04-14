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

    //cy.visit("/case-search")
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
    cy.wait(5000);
    cy.get('[data-testid="button-search"]').click();
    cy.wait(7000);
    cy.contains("We've found"); // verify correct error is displayed
  });
});
