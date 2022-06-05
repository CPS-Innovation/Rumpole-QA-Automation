// describe('Search By Valid ID', function () {
//   const token =
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL0NQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbS9mYS1ydW1wb2xlLXFhLWdhdGV3YXkiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wMGRkMGQxZC1kN2U2LTQzMzgtYWM1MS01NjUzMzljNzA4OGMvIiwiaWF0IjoxNjQ1Mjk3NjE4LCJuYmYiOjE2NDUyOTc2MTgsImV4cCI6MTY0NTMwMjE3MSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUh4NVI5ZnpnWEtrSVdBNnZHUjBFSnhSeE1kSHdPMmpyeUl1N3VhaWF5dks1U0IzUE9DWW1BaEpuMlRFVEhxald3cm1Yek9pR1ZQcWlhQ3BtQjVLOHBERkY1Uy9NSXBoNEtOOWdLbFFpeWFnPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6Ik9nYm9ubmEgKEFETUlOKSIsImdpdmVuX25hbWUiOiJBbWFuemUiLCJpcGFkZHIiOiI4Ni4xNjAuMTM2LjE1MSIsIm5hbWUiOiJBbWFuemUgT2dib25uYSAoQURNSU4pIiwib2lkIjoiOTMxNzY2ZTItODYxMi00NGVkLTlkMjMtN2YyMzAwYjRiODY4IiwicHdkX2V4cCI6IjAiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wb3J0YWwubWljcm9zb2Z0b25saW5lLmNvbS9DaGFuZ2VQYXNzd29yZC5hc3B4IiwicmgiOiIwLkFTQUFIUTNkQU9iWE9FT3NVVlpUT2NjSWpGR2hUT0tDeHd0R3BkS0FkQ3FlcE5rZ0FBMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJwOEdLejZYOXduT2hRU1lDR3RnOFBiem5fRlhLb1hBTnhRdTFLNWFLRV9FIiwidGlkIjoiMDBkZDBkMWQtZDdlNi00MzM4LWFjNTEtNTY1MzM5YzcwODhjIiwidW5pcXVlX25hbWUiOiJhLmFvZ2Jvbm5hQENQU0dPVlVLLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImEuYW9nYm9ubmFAQ1BTR09WVUsub25taWNyb3NvZnQuY29tIiwidXRpIjoiNk5fQVJQX3pKMDYtemttWXJLNUtBQSIsInZlciI6IjEuMCJ9.g1TqMYfVu8QRp-iDV8WCrCXY77ZyAygjra8ao7Idt22INqxEthfyCNx5ZToY11BdmUx2QDZd4Xi2HZHYnw4XZLrg0O2lJGGZHOuCSHL5Khe49jGK0NQjb69Jeltr5kS0Alnr5JcdMp-W9WOlec185AyZVk93qwO-bq_OILuFDcv7n5zWLegRmPEsebH7dVu6WUZg0U6b59g0q1FQdcPWwy1CEz7324jcC-mXJtOb8YPzgT93VDUaJ4aks2v49VeAlZxGvtLAVaFWXp2OahZ1unbwZjlZTATm4vm0hYx_EK_3FsL8HiiX2b_HcRFSJIvXGEAd9zSo03fEISZ3wcTEeA ';

//   it('Invalid ID Search', function () {
//     cy.request({
//       method: 'GET',
//       url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-details/1869',
//       failOnStatusCode: false,
//       headers: {
//         authorization: 'Bearer ' + token,
//       },
//     }).then(function (response) {
//       expect(response.status).to.eq(404);
//     });
//   });

//   it('Invalid URN Search', function () {
//     cy.request({
//       method: 'GET',
//       url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-information-by-urn/invalidurn',
//       failOnStatusCode: false,
//       headers: {
//         authorization: 'Bearer ' + token,
//       },
//     }).then(function (response) {
//       expect(response.status).to.eq(404);
//     });

//     it('api status check ', function () {
//       cy.request({
//         method: 'GET',
//         url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/status/345563',

//         headers: {
//           authorization: 'Bearer ' + token,
//         },
//       }).then(function (response) {
//         expect(response.status).to.eq(200);
//       });
//     });
//   });

//   it('Valid ID Search', function () {
//     cy.request({
//       method: 'GET',
//       url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-details/18869',
//       failOnStatusCode: false,
//       headers: {
//         authorization: 'Bearer ' + token,
//       },
//     }).then(function (response) {
//       expect(response.status).to.eq(200);
//     });
//   });

//   it('Gateway status check ', function () {
//     cy.request({
//       method: 'GET',
//       url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/status/345563',

//       headers: {
//         authorization: 'Bearer ' + token,
//       },
//     }).then(function (response) {
//       expect(response.status).to.eq(200);
//     });
//   });

//   it('GET Valid Urn', function () {
//     cy.request({
//       method: 'GET',
//       url: 'https://fa-rumpole-qa-gateway.azurewebsites.net/api/case-information-by-urn/10DC1234520',
//       headers: {
//         authorization: 'Bearer ' + token,
//       },
//     }).then(function (response) {
//       expect(response.status).to.eq(200);
//       expect(response.body[0].id).to.eq(18869);
//       expect(response.body[0].uniqueReferenceNumber).to.eq('10DC1234520');
//       expect(response.body[0].caseStatus.description).to.eq('Live Case');
//       expect(response.body[0].caseStatus.code).to.eq('LV');
//       cy.log(JSON.stringify(response.body));
//     });
//   });
// });
