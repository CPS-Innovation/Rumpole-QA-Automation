describe('Search By Valid ID', function () {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQ5MDY3NzM3LCJuYmYiOjE2NDkwNjc3MzcsImV4cCI6MTY0OTA3MjEwNSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQTJQTlZKUE9CcXM3ZDBVYWtiWHJ2YzZ5NHVEQmc4ZFFlUCtxeUVKVXRVRmlLZTBiQXpKbnc4bGRkVSttSzcvUE1HaXBnYnkvbHJsWS8vUXFSNFZMNlUrZEhmYm03VEFDM2VodXRNRkRiOTBBPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiIxMDkuMTUwLjU4LjUwIiwibmFtZSI6IkFtYW56ZSBPZ2Jvbm5hIChBRE1JTikiLCJvaWQiOiI5MzE3NjZlMi04NjEyLTQ0ZWQtOWQyMy03ZjIzMDBiNGI4NjgiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVNBQUhRM2RBT2JYT0VPc1VWWlRPY2NJakY4UTd0Y3NuX2hPaDJUWWVmb3dQX3dnQUEwLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InR4MzdIVUJqMWItaGkyYjRiWkZQWWpmaW1JYUJpZU9zZUJCeEFfeE5KNDAiLCJ0aWQiOiIwMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMiLCJ1bmlxdWVfbmFtZSI6ImEuYW9nYm9ubmFAQ1BTR09WVUsub25taWNyb3NvZnQuY29tIiwidXBuIjoiYS5hb2dib25uYUBDUFNHT1ZVSy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJYTkRmWllrMlpFLTNYTldXamh0RUFBIiwidmVyIjoiMS4wIn0.Ydp59BaoWKm5VK02rZbQTESgamN4WigGGsi60sCNgKSSP8WOa2VzAJOaTN-HaqTWSAMpONnle3S34rqY6SciZFdyY6CDSqvcvyIxBsD3wrIIPvqwlAilg35q9YXmJBPqAKIUD8SwJMEr42v8bdtJeJjgLb8086wFZKH_CaiVAd53A4ntKOPcJXeHxlG9L1swX7JW1orxU1t-6acrUJLheHh26jXVAuUS5OOsk2trsxMNgPOs6pHnpdmizbGekFhKicivpARrF2j9Vyxk0hTsCVgvM8xUO35CJG0PLsF64bW5vat5N__6k_PxrAY7plebYy8v1S10HZ_Qxzx3gZfX4A.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQ1Mjk3NjE4LCJuYmYiOjE2NDUyOTc2MTgsImV4cCI6MTY0NTMwMjE3MSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUh4NVI5ZnpnWEtrSVdBNnZHUjBFSnhSeE1kSHdPMmpyeUl1N3VhaWF5dks1U0IzUE9DWW1BaEpuMlRFVEhxald3cm1Yek9pR1ZQcWlhQ3BtQjVLOHBERkY1Uy9NSXBoNEtOOWdLbFFpeWFnPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiI4Ni4xNjAuMTM2LjE1MSIsIm5hbWUiOiJBbWFuemUgT2dib25uYSAoQURNSU4pIiwib2lkIjoiOTMxNzY2ZTItODYxMi00NGVkLTlkMjMtN2YyMzAwYjRiODY4IiwicHdkX2V4cCI6IjAiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wb3J0YWwubWljcm9zb2Z0b25saW5lLmNvbS9DaGFuZ2VQYXNzd29yZC5hc3B4IiwicmgiOiIwLkFTQUFIUTNkQU9iWE9FT3NVVlpUT2NjSWpGR2hUT0tDeHd0R3BkS0FkQ3FlcE5rZ0FBMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJwOEdLejZYOXduT2hRU1lDR3RnOFBiem5fRlhLb1hBTnhRdTFLNWFLRV9FIiwidGlkIjoiMDBkZDBkMWQtZDdlNi00MzM4LWFjNTEtNTY1MzM5YzcwODhjIiwidW5pcXVlX25hbWUiOiJhLmFvZ2Jvbm5hQENQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImEuYW9nYm9ubmFAQ1BTR09WVUsub25taWNyb3NvZnQuY29tIiwidXRpIjoiNk5fQVJQX3pKMDYtemttWXJLNUtBQSIsInZlciI6IjEuMCJ9.g1TqMYfVu8QRp-iDV8WCrCXY77ZyAygjra8ao7Idt22INqxEthfyCNx5ZToY11BdmUx2QDZd4Xi2HZHYnw4XZLrg0O2lJGGZHOuCSHL5Khe49jGK0NQjb69Jeltr5kS0Alnr5JcdMp-W9WOlec185AyZVk93qwO-bq_OILuFDcv7n5zWLegRmPEsebH7dVu6WUZg0U6b59g0q1FQdcPWwy1CEz7324jcC-mXJtOb8YPzgT93VDUaJ4aks2v49VeAlZxGvtLAVaFWXp2OahZ1unbwZjlZTATm4vm0hYx_EK_3FsL8HiiX2b_HcRFSJIvXGEAd9zSo03fEISZ3wcTEeA ';

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
        url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/status/',

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
      url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/status/',

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
