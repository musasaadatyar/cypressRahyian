//interact with element 1
describe('interact with element',()=> {
    it('interact with element' , ()=>{
        //1-check box
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#check_python').should('not.be.checked')
        cy.get('#check_python').check()
        cy.wait(5000)
        cy.get('#check_python').should('be.checked')
        cy.get('#check_python').uncheck().should('not.be.checked')
    })

    //2-Radio button
    it('Radio button', ()=> {
        cy.visit('https://material.angular.io/components/slide-toggle/examples')
        cy.get('#mat-radio-2-input').should('not.be.checked')
        cy.get('#mat-radio-2-input').check()
            .should('be.checked')
        //disabled
        cy.get('#mat-slide-toggle-1-input').check({force:true}).should('not.be.checked')
    })

    //4-multiple check()
    it('multiple check()', () => {
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('input[type=checkbox]').check(['PYTHON','JAVASCRIPT'])
    })

    //5: assert enable/disable
    it('assert enable/disable', function () {
        cy.visit('https://material.angular.io/components/slide-toggle/examples')
        cy.contains('Ok, Got it').click()
        cy.get('#mat-mdc-slide-toggle-1-button').should('be.enabled')
        cy.get('#mat-mdc-checkbox-2-input').should('not.be.checked')
        cy.get('#mat-mdc-checkbox-2-input').check()
        cy.get('#mat-mdc-slide-toggle-1-button').should('not.be.enabled')
    });

    //6:drop down (option select)
    it('drop down', function () {
    cy.visit('https://material.angular.io/components/select/overview')
        cy.contains('Ok, Got it').click()
        cy.get('select[id=mat-input-0]').select('mercedes').should('have.value','mercedes')

    // 7: meta-select or other option most click on tag then click on other option
        cy.get('mat-select[id="mat-select-0"]').click()
        cy.get('#mat-option-1').click()
    });

    //8: chips selected
    it('chips select',() => {
        cy.visit('https://material.angular.io/components/chips/examples')
        cy.contains('Ok, Got it').click()
        cy.get('input[id=mat-mdc-chip-list-input-0]').click()
        cy.get('mat-option[id=mat-option-3]').click()
        cy.get('input[id=mat-mdc-chip-list-input-0]').click()
        cy.get('#mat-option-2').click()
        //within: برای گشتن در داخل یک لیست است
        cy.get('mat-chip-grid[aria-label="Fruit selection"]')
            .within(()=>{
            cy.contains('Orange')
        })
    })
})