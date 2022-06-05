import SearchPage from '../page-objects/search-page';
import ResultPage from '../page-objects/result-page';
const searchPage = new SearchPage();
const resultPage = new ResultPage();

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

  it('Verify Persist Case URN  ', () => {
  cy.visit('/');
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton).click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.get(resultPage.urnResult).click();//click on URN result
  cy.wait(3000);
  cy.contains('13WD1234520');

});

it('Verify Persist Defendant Name ', () => {
  cy.visit('/');
  cy.get(searchPage.searchInput).clear(); //clear the text box
  cy.get(searchPage.searchInput).type('13WD1234520'); //input a valid URN
  cy.get(searchPage.homeSearchButton).click();
  cy.wait(3000);
  cy.contains("We've found"); // verify correct error is displayed
  cy.get(resultPage.urnResult).click();//click on URN result
  cy.wait(3000);
  cy.contains('Biologist, Maureen');

});

});