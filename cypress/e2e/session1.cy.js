describe( 'suit1', () => {
    it('search google', () => {
        cy.visit('https://www.google.com/')
        cy.get("textarea[name=q]").type('cypress{enter}')

    })

    it('cypress website',() => {
        cy.visit('https://www.cypress.io/')

        // دقیقا برابر یک مقدار باشد :eq
        cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')

        //include: یعنی داری این مقدار باشد
        cy.title().should('include', 'JavaScript Component Testing ' )
    })
})