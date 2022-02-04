describe('Search By Valid ID', function () {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQzNzcyNjAxLCJuYmYiOjE2NDM3NzI2MDEsImV4cCI6MTY0Mzc3NzcyMywiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUJJUEJoZ2F6L1JOOXBXV1YwWTdjK3BtMG4zY1lEOFpnRDFTMk5QeXpkU2ROWXlTWVpPTnFXcGx1QVk5SUo5L3pBQysza1hjRHlaV0ZsbEYza04waDFOa1VhdXBldC9xazQxMFIrV3VIS1ZrPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiI4Ni4xMzQuMjMyLjE5IiwibmFtZSI6IkFtYW56ZSBPZ2Jvbm5hIChBRE1JTikiLCJvaWQiOiI5MzE3NjZlMi04NjEyLTQ0ZWQtOWQyMy03ZjIzMDBiNGI4NjgiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVNBQUhRM2RBT2JYT0VPc1VWWlRPY2NJakZHaFRPS0N4d3RHcGRLQWRDcWVwTmtnQUEwLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InA4R0t6Nlg5d25PaFFTWUNHdGc4UGJ6bl9GWEtvWEFOeFF1MUs1YUtFX0UiLCJ0aWQiOiIwMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMiLCJ1bmlxdWVfbmFtZSI6ImEuYW9nYm9ubmFAQ1BTR09WVUsub25taWNyb3NvZnQuY29tIiwidXBuIjoiYS5hb2dib25uYUBDUFNHT1ZVSy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJtd3NLU0h4bU9rdUtXdkNMZmpWT0FBIiwidmVyIjoiMS4wIn0.pjKa6gSHlH9Cvqj38IWKFITXuXIzCohM6t2gFJwIIj1yLGIplZheHfs7k1Nkfy6FLRqafDDR3rhfM3DCD5SQVaFRYbosneoFfLh0tyKilRyb2DrpUnTCjOsomWI96XJCzDjmZh14KczHO1KBuuF2OqMP9cZ-zJ4aE0iKDbagWrUeAwzyUMUWeQk4G7Nt2rYH9plu2XyXTZM4JBhGJQzUDQ_z0JUeMsNmnTkvg2-0bKOKAjFjaj9_vMaOSNFmty0o1-ibb14c2hiVfZqc-2UTFMyPDDyOp6rWljsYaKRlxyfinR2ZDYRPNsiR3l7yXOGoQE7KduB3pqcScAmcf35NgQ';

  it.only('Invalid ID Search', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-details/1869',
      failOnStatusCode: false,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(404);
    });
  });

  it.only('Valid ID Search', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-details/18869',
      failOnStatusCode: false,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(200);
    });
  });


  it.only('api status check ', function () {
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
