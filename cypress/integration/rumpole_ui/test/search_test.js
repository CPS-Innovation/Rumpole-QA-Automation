
import SearchPage from '../page-objects/search-page';

const searchPage = new SearchPage();

describe('the app', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/');
  });

  it('opens', () => {
    cy.contains(searchPage.user);
    cy.contains(searchPage.privacy);
    cy.contains(searchPage.search);
  });

  // Invalid URN test
  it('Invalid Urn', () => {
    cy.get(searchPage.searchInput).type('Invalid URN');
    cy.get(searchPage.homeSearchButton).click();
    cy.contains('Please enter a valid URN'); // verify correct error is displayed
  });

  it.only('Valid Urn Test', () => {
    //Valid URN Test

    cy.visit('/');
    cy.get(searchPage.searchInput).clear(); //clear the text box
    cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
    cy.get(searchPage.homeSearchButton).click();
    cy.wait(5000);
    cy.contains("We've found"); // verify correct error is displayed
  });

  it('Search for multiple URN', () => {
    //Valid URN Test

    cy.visit('/');
    cy.get(searchPage.searchInput).clear(); //clear the text box
    cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
    cy.get(searchPage.homeSearchButton).click();
    cy.wait(3000);
    cy.contains("We've found"); // verify correct error is displayed
    cy.get('[data-testid="link-back-link"]').click(); //go back to search page
    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('19UN8765432'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.wait(3000);
    cy.contains("We've found"); // verify correct error is displayed
  });
});
