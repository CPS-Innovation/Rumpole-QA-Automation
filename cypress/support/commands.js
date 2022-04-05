// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { login } from "./auth";
import {
    authority,
    clientId,
    clientSecret,
    apiScopes,
    username,
    password,
} from "./auth-config";

let cachedTokenExpiryTime = new Date().getTime();
let cachedTokenResponse = null;

Cypress.Commands.add("login", () => {
    // Clear our cache if tokens are expired
    if (cachedTokenExpiryTime <= new Date().getTime()) {
        cachedTokenResponse = null;
    }

    return login(cachedTokenResponse).then((tokenResponse) => {
        cachedTokenResponse = tokenResponse;
        // Set expiry time to 50 minutes from now
        cachedTokenExpiryTime = new Date().getTime() + 50 * 60 * 1000;
    });
});

Cypress.Commands.add(
    "requestToken",
    {
        prevSubject: "optional",
    },
    (subject) => {
        return cy.request({
            url: authority + "/oauth2/v2.0/token",
            method: "POST",
            body: {
                grant_type: "password",
                client_id: clientId,
                client_secret: clientSecret,
                scope: ["openid profile"].concat(apiScopes).join(" "),
                username,
                password,
            },
            form: true,
        });
    }
);
