describe("the app", () => {
    it("opens", () => {
        cy.login();

        cy.visit("/");
    });
});

export {};
