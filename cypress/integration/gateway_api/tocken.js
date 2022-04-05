describe("Search By Valid ID", function () {
    before(() => {
        cy.requestToken()
            .then((response) => response.body.access_token)
            .as("token");
    });

    it("api status check ", function () {
        cy.request({
            method: "GET",
            failOnStatusCode: false,
            url: "https://fa-rumpole-dev-gateway.azurewebsites.net/api/status/",
            headers: {
                authorization: "Bearer " + this.token,
            },
        }).then(function (response) {
            console.log(response);
            expect(response.status).to.eq(200);
        });
    });
});
