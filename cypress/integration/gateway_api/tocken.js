export var token ="";
describe('Search By Valid ID', function () {


  it('Tocken Generate', function () {
    cy.request({
      method: 'GET',
      url: 'https://login.microsoftonline.com/00dd0d1d-d7e6-4338-ac51-565339c7088c/oauth2/v2.0/token',
      failOnStatusCode: false,
      form:true,
      headers: {
        //authorization: 'Bearer ' + token,
      },
      body:{
        client_id:"e24ca151-c782-460b-a5d2-80742a9ea4d9",
        grant_type:"client_credentials",
        client_secret:"eFH7Q~kcArwuaTMYsjbDyoRyNXni1DZHcT79Z",
        scope:"https://graph.microsoft.com/.default"
      }
    }).then(function (response) {
      expect(response.status).to.eq(200);
     cy.log(response.body.access_token)
     token=response.body.access_token
    });
  });

  it('api status check ', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/status/345563',

      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(200);
    });
  });
});