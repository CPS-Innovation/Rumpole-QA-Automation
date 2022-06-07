//const { expect } = require("chai");
import SearchPage from '../page-objects/search-page';
import ResultPage from '../page-objects/result-page';
const searchPage = new SearchPage();
const resultPage = new ResultPage();

describe('the app', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/');
  });

it('Navigate back to search screen with hyperlink', () => {
  //Navigate back to search screen

  cy.visit('/');
  cy.get(searchPage.findAcase).should('contain', 'Find a case')
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton)
      .should('contain', 'Search') //verify 'Search' Text is on page
  cy.get(searchPage.homeSearchButton).click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  //cy.get('[data-testid="link-back-link"]')
  cy.get(searchPage.backLinkButtonFirstResult).click(); //go back to search page
  cy.contains(searchPage.privacy);
  cy.contains(searchPage.search);
  cy.contains('Search for a case URN');

});

it('Navigate back with the browser back button', () => {
  //Navigate back to search screen

  cy.visit('/');
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton).click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.go('back');
  cy.contains('Privacy');
  cy.contains(searchPage.privacy);
  cy.contains('Search for a case URN');

});

it('Navigate back to result page with browser back button', () => {
  //Navigate back to search screen
  
  cy.visit('/');
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton).click();
  cy.get('[data-testid="link-13WD1234520"]').click();
  cy.go('back');
  cy.wait(5000);
  cy.contains("We've found"); // verify correct error is displayed

});

it.only('Navigate back to result page with hyperlink', () => {
  //Navigate back to search screen

  cy.visit('/');
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton).click();
  cy.get('[data-testid="link-13WD1234520"]').click();
  cy.wait(5000);
  cy.get(searchPage.backLinkButtonFirstResult).click(); //go back to search page
  cy.wait(5000);
  cy.contains("We've found"); // verify correct error is displayed

});

});
