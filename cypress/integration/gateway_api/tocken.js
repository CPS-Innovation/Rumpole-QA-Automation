describe('Search By Valid ID', function () {
  before(() => {
    cy.requestToken()
      .then((response) => response.body.access_token)
      .as('token');
  });

  it('api status check ', function () {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: 'https://fa-rumpole-dev-gateway.azurewebsites.net/api/status/',
      headers: {
        authorization: 'Bearer ' + this.token,
      },
    }).then(function (response) {
      console.log(response);
      expect(response.status).to.eq(200);
    });
  });

  it('GET Valid Urn', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-information-by-urn/10DC1234520',
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.eq(18869);
      expect(response.body[0].uniqueReferenceNumber).to.eq('10DC1234520');
      expect(response.body[0].caseStatus.description).to.eq('Live Case');
      expect(response.body[0].caseStatus.code).to.eq('LV');
      cy.log(JSON.stringify(response.body));
    });
  });
});
