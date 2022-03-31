describe('Search By Valid URN', function () {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQzNzg5NzkzLCJuYmYiOjE2NDM3ODk3OTMsImV4cCI6MTY0Mzc5NTQ1MSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQVdvcDVOMXFnL0dwbGJPbUZ3eHd3bU1FZk9jd1ZxbzJUVTRudzE5UUNuRkxDd1E1akwxUGRobnpVSzVIVEJ1SlplaWNjTW9XelBUL2g4WEhVZkdUM0Y4OVRtMVRsbU5UVkpwU3NvWGQvWG5rPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiI4Ni4xMzQuMjMyLjE5IiwibmFtZSI6IkFtYW56ZSBPZ2Jvbm5hIChBRE1JTikiLCJvaWQiOiI5MzE3NjZlMi04NjEyLTQ0ZWQtOWQyMy03ZjIzMDBiNGI4NjgiLCJwd2RfZXhwIjoiMCIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVNBQUhRM2RBT2JYT0VPc1VWWlRPY2NJakZHaFRPS0N4d3RHcGRLQWRDcWVwTmtnQUEwLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InA4R0t6Nlg5d25PaFFTWUNHdGc4UGJ6bl9GWEtvWEFOeFF1MUs1YUtFX0UiLCJ0aWQiOiIwMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMiLCJ1bmlxdWVfbmFtZSI6ImEuYW9nYm9ubmFAQ1BTR09WVUsub25taWNyb3NvZnQuY29tIiwidXBuIjoiYS5hb2dib25uYUBDUFNHT1ZVSy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJKY2FQU0Zmd2UwZXVkek9nRHY5YkFBIiwidmVyIjoiMS4wIn0.bJLZByZBMLmp9kI1eUGohCexV5-_VnFXr3bPEvhBYQkhcZOv77FSGmPcPXR46gSHR70hf4JKN0b__pJDa-kOS_ucEQ1HzE-T5OHeciInrlhTTpEO2LHXp333u__W-WkOc1S3t3t8Xl1ap7ruzW5zApGsFyetj6ypbQQSVj3AllVbK_wEBmPUGr75bUbxVN7sLYPTCXSiA5esxOADxpAZgQwxDZ-mnTwaJ7IOKIKzUdr-P901RvQ6bCbDWi-vMz2P4Z2TBalIWVaHI9ijcPip1OmASmESATqyv9IEdZMU-spHABgaRMOJW_bPNKaYotCJAfstSOTj9TUxbNRhLnZJ5w';

  it('GET', function () {
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
  });
  
});
