export var token = '';
describe('Search By Valid ID', function () {
  it('api status check passing ', function () {
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

  it('GET Valid Urn', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-information-by-urn/16DC1234520',
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(200);
      //expect(response.body).has.property("uniqueReferenceNumber","16DC1234520");
      //expect(response.body[0].id).to.eq(18875);
      //expect(response.body[0].uniqueReferenceNumber).to.eq('16DC1234520');
      //expect(response.body[0].caseStatus.description).to.eq('Live Case');
      //expect(response.body[0].caseStatus.code).to.eq('LV');
      //cy.log(JSON.stringify(response.body));
    });
  });

  it('Valid ID Search', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-details/18875',
      failOnStatusCode: false,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(200);
    });
  });
});
