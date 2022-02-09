describe('Search By Valid ID', function () {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQ0NDA5MTkzLCJuYmYiOjE2NDQ0MDkxOTMsImV4cCI6MTY0NDQxMzI1OCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQTNtSkErc1BMR1NaUHEyTFFSdmVZRzk0a3c5WHJBZ2NvRzMzcXFxdEpuQ0lzWVVxVXVWQXlORTk1NktaalJzcXRGZEFlUGpwYTgwa0VaU0hDcXk3cythTVJFeGJ4aktuYWplakdpekp1VktRPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiI4Ni4xODEuMzkuMTYiLCJuYW1lIjoiQW1hbnplIE9nYm9ubmEgKEFETUlOKSIsIm9pZCI6IjkzMTc2NmUyLTg2MTItNDRlZC05ZDIzLTdmMjMwMGI0Yjg2OCIsInB3ZF9leHAiOiIwIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BU0FBSFEzZEFPYlhPRU9zVVZaVE9jY0lqRkdoVE9LQ3h3dEdwZEtBZENxZXBOa2dBQTAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoicDhHS3o2WDl3bk9oUVNZQ0d0ZzhQYnpuX0ZYS29YQU54UXUxSzVhS0VfRSIsInRpZCI6IjAwZGQwZDFkLWQ3ZTYtNDMzOC1hYzUxLTU2NTMzOWM3MDg4YyIsInVuaXF1ZV9uYW1lIjoiYS5hb2dib25uYUBDUFNHT1ZVSy5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhLmFvZ2Jvbm5hQENQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkhQdHdqUVRiWVVhel9jN3o5eFl1QUEiLCJ2ZXIiOiIxLjAifQ.uykn-aZp24sLcR79a_MEy6BLlm3RhZZo-0N-2jJahZojCKwKdJ034KjB-ZqOUGvhlXbC85SVi5gyMDYsO9LdBbhkbcESY8TIhEwolu6bWBOnWridk5e5Hs96zAcYu8Sa7B8YkC6-TrPJlMQPaTnENh9O29M7z2iHvAdoT1_0jLimZ0-o6-8LcFRJNaaXI5IlTbRxhT413dJibsg28bxOksVtc_1CMmJsEyOvOOqQqK0WPtcIcFH6aSE9PAAcdpaW2xFiG35vqA2vxfiRvb8-W9v-wm38NoDezyRwbkdaKorvzXX2WUgnCwx_eKPYfR9Dqu66QDfP_ZidWxvyfFmJlA';

  it('Invalid ID Search', function () {
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

  it('Invalid URN Search', function () {
    cy.request({
      method: 'GET',
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-information-by-urn/invalidurn',
      failOnStatusCode: false,
      headers: {
        authorization: 'Bearer ' + token,
      },
    }).then(function (response) {
      expect(response.status).to.eq(404);
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

  it('Valid ID Search', function () {
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

  it('Gateway status check ', function () {
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
