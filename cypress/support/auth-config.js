const {
    AUTHORITY: authority,
    CLIENTID: clientId,
    CLIENTSECRET: clientSecret,
    APISCOPE: apiScope,
    USERNAME: username,
    PASSWORD: password,
} = Cypress.env();

const apiScopes = [apiScope];

export { authority, clientId, clientSecret, apiScopes, username, password };
