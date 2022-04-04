describe("the app", () => {
    it("opens", () => {
        cy.login();

        cy.visit("/");

        cy.contains("AutomationUser.ServiceTeam2@cps.gov.uk");
    });
});

export {};
