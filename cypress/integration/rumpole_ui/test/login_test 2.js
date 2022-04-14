import LoginPage from "../page-objects/login-page";

 const loginpage=new LoginPage();

describe('Valid Login', function () {

  it('login test', function () {

    cy.visit(loginpage.loginUrl)
    .title().should('eq',loginpage.title)
    
   
   
  });

});