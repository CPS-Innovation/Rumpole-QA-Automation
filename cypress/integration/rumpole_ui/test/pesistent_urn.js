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

  it('Verify Persist Case URN  ', () => {
  cy.visit('/case-search');
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]').click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.get('[class="govuk-link"]').click();//click on URN result
  cy.wait(3000);
  cy.contains('13WD1234520');

});

it('Verify Persist Defendant Name ', () => {
  cy.visit('/case-search');
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]').click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.get('[class="govuk-link"]').click();//click on URN result
  cy.wait(3000);
  cy.contains('Biologist, Maureen');

});

});