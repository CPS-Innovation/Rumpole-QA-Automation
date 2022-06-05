const { expect } = require("chai");

describe('the app', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/');
  });

it('Navigate back to search screen with hyperlink', () => {
  //Navigate back to search screen

  cy.visit('/case-search');
  cy.get('.govuk-heading-xl').should('contain', 'Find a case')
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]')
      .should('contain', 'Search') //verify 'Search' Text is on page
  cy.get('[data-testid="button-search"]').click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.get('[data-testid="link-back-link"]')
  cy.get('[data-testid="link-back-link"]').click(); //go back to search page
  cy.contains('Privacy');
  cy.contains('Search');
  cy.contains('Search for a case URN');

});

it('Navigate back with the browser back button', () => {
  //Navigate back to search screen

  cy.visit('/case-search');
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]').click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.go('back');
  cy.contains('Privacy');
  cy.contains('Search');
  cy.contains('Search for a case URN');

});

it('Navigate back to result page with browser back button', () => {
  //Navigate back to search screen
  
  cy.visit('/case-search');
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('16DC1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]').click();
  cy.get('[data-testid="link-16DC1234520"]').click();
  cy.go('back');
  cy.wait(5000);
  cy.contains("We've found"); // verify correct error is displayed

});

it('Navigate back to result page with hyperlink', () => {
  //Navigate back to search screen

  cy.visit('/case-search');
  cy.get('.govuk-input').clear(); //clear the text box
  cy.get('.govuk-input').type('16DC1234520'); //input a valid URN
  cy.get('[data-testid="button-search"]').click();
  cy.get('[data-testid="link-16DC1234520"]').click();
  cy.wait(5000);
  cy.get('[data-testid="link-back-link"]').click(); //go back to search page
  cy.wait(5000);
  cy.contains("We've found"); // verify correct error is displayed

});

});
