describe('the app', () => {
  beforeEach(() => {
    cy.login();

    cy.visit('/');
  });

  it('Check Invalid URN message banner is displayed', () => {
    //Navigate back to search screen

    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD12345200'); //input a valid URN
    cy.get('[data-testid="button-search"]').should('contain', 'Search'); //verify 'Search' Text is on page
    cy.get('[data-testid="button-search"]').click();
    cy.wait(3000);
    cy.get('[data-testid="link-validation-urn"]').should(
      'contain',
      'Please enter a valid URN'
    );
  });

  it('Check Invalid URN message is displayed in textbox', () => {
    //Navigate back to search screen

    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD12345200'); //input a valid URN
    cy.get('[data-testid="button-search"]').should('contain', 'Search'); //verify 'Search' Text is on page
    cy.get('[data-testid="button-search"]').click();
    cy.wait(3000);
    cy.get('[data-testid="input-search-urn-error"]').should(
      'have.text',
      'Please enter a valid URN'
    ); //verify error is displayed next to textbox
  });
  it('Verify invalid urn error is displayed on result screen  ', () => {
    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.wait(3000);
    cy.contains("We've found"); // verify correct error is displayed
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD12345201'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.get('[data-testid="link-validation-urn"]').should(
      'contain',
      'Please enter a valid URN'
    );
  });

  it('Verify Invalid URN message is displayed in the textbox on result screen  ', () => {
    cy.visit('/case-search');
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD1234520'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.wait(3000);
    cy.contains("We've found"); // verify correct error is displayed
    cy.get('.govuk-input').clear(); //clear the text box
    cy.get('.govuk-input').type('13WD12345201'); //input a valid URN
    cy.get('[data-testid="button-search"]').click();
    cy.get('[data-testid="input-search-urn-error"]').should(
      'have.text',
      'Please enter a valid URN'
    ); //verify error is displayed next
  });
});
