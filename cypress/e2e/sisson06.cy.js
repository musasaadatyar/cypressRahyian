describe(' interaction with element2 ', () => {
    // 1: alert => all alert in cypress be accept ساپرس تمام آلرت هخا را به طور پیش فرض قبول میکند
    it('alert', function () {
        cy.visit('cypress/support/random_number.html')
        cy.contains('Click me').click({force: true})
        cy.on('window:alert', (message) => {
            expect(message).eq('Hello! I am an alert box!')
        })
    });
    //2:confirm: have cancel and ok
    //accept
    it('alert confirm accept', function () {
        cy.visit('cypress/support/random_number.html')
        cy.contains('Try it').click({force: true})
        cy.on('window:confirm', (message) => {
            expect(message).eq('Hello! I am an confirm box!')
        })
        // cy.get("#result").should('have.text', 'you click: ok')
        // cy.get("#result").invoke('text').should('equal', 'you click: ok')
    });

    // dismiss
    it('alert confirm dismiss', function () {
        cy.visit('cypress/support/random_number.html')
        cy.contains('Try it').click({force: true})
        cy.on('window:confirm', (message) => {
            expect(message).eq('Hello! I am an confirm box!')
            return false
        })
        // cy.get("#result").should('have.text', 'you click: cancel')
        // cy.get("#result").invoke('text').should('equal', 'you click: cancel')
    })

    // 3:alert prompt
    it('alert prompt', () => {
        cy.visit('cypress/support/alert.html')
        cy.window().then(($valPrompt) => {
            cy.contains('Try it').click()
            cy.stub($valPrompt, 'prompt').returned('automation')
        })
    })

    //4:open dialog  and close
    it('dialog', () => {
        cy.visit('https://material.angular.io/components/dialog/examples')
        cy.contains('Ok, Got it').click()
        cy.get('a[href="/cdk"]').then((cdk) => {
            cy.get('#dialog-content > .docs-example-viewer-wrapper > .docs-example-viewer-body > .ng-star-inserted > .mdc-button > .mdc-button__label').click()
            cy.wait(4000)
            //   پیداکردن x, y یک المنت
            let rect = cdk[0].getBoundingClientRect()
            cy.document().then((doc) => {
                doc.elementFromPoint(rect.x, rect.y).click()
            })
        })
    })

    //5: tost massage or snake bar
    // snake bar by text
    it('snake bar by text', () => {
        cy.visit('https://material.angular.io/components/snack-bar/examples')
        cy.contains('Ok, Got it').click()
        cy.get('input[id="mat-input-0"]').clear().type('1')
        cy.get('snack-bar-annotated-component-example.ng-star-inserted > .mdc-button > .mdc-button__label').click()
        cy.get(".cdk-global-overlay-wrapper").within(() => {
            cy.contains("Pizza party")
        })
    })
    //snake bar by selector
    it('snake bar by selector', () => {
        cy.visit('https://material.angular.io/components/snack-bar/examples')
        cy.contains('Ok, Got it').click()
        cy.get('input[id="mat-input-0"]').clear().type('1')
        cy.get('snack-bar-annotated-component-example.ng-star-inserted > .mdc-button > .mdc-button__label').click()
        cy.get('.example-pizza-party').should('exist')
    })

    //6:Mouse Hover
    it('Mouse Hover', () => {
        //when implement by onmouseover
        cy.visit('test-hover-html')
        cy.get('#left11').should('not.be.visible')
        cy.get('#menu2').trigger('mouseover')
        cy.get('#left11').should('be.visible')

        //    when implemented by css sedu-class ':hover'
        cy.get('#left11').should('not.be.visible')
        cy.get('#menu2').realHover()
        cy.get('#left11').should('be.visible')
    })

    //7:tooltip message
    it('snake bar by selector', () => {
        cy.visit('https://material.angular.io/components/tooltip/examples')
        cy.contains('Ok, Got it').click()
        cy.get('#mat-input-2').clear().type('Automation camp tooltip')
        cy.get('tooltip-message-example.ng-star-inserted > .mat-mdc-tooltip-trigger > .mdc-button__label').realHover()
        cy.get('.cdk-overlay-container').last().within(() => {
            cy.contains('Automation camp tooltip')
        })
    })
})

