///<reference types='cypress' />

describe('session2',()=> {

    // it('finding element', ()=> {
    //     cy.visit('https://play2.automationcamp.ir/')
    //     // 1: find element and type in the element
    //     cy.get('#fname').type('musa')
    // })

    // it('scroll', ()=>{
        // auto scroll
        // cy.visit('https://datatables.net/examples/basic_init/scroll_x.html/')
        // cy.get(':nth-child(9) > :nth-child(9)').click()
    // })

    // it('find text', () => {
    //     cy.visit('https://play2.automationcamp.ir/')
    //     //  2: find element by text  =>
    //     //  cy.contains(text) : در داخل صفحه میگردد و و متنی که مثل آن باشد را برمیگردد
    //     cy.contains('This is your form title:')
    //
    //     // cy.contains(selector, text) : سلکتوری که متن داخل آن برابر با آن مقدار باشد را پیدا میکند
    //     cy.contains('label[for=moption]',  'Option 2')
    //
    //     // cy.get(selector).contains(text)
    //     cy.get('label[for=moption]').contains('Option 3')
    //     //اگر چندتا سلکتور پیدا شود همیشه اولین مورد را برمیگرداند
    // })

    it('children', () => {
        cy.visit('https://play2.automationcamp.ir/')
    // 3: relatives
        // children() =>
            // cy.get(selector).children() ,
            cy.get('#owc').children()

            // cy.get(selector).children(selector)
            cy.get('#owc').children('[value="option 2"]').click()

        // parent()
            // cy.get(selector).parent() ,
            cy.contains('Transponster').parent()

            // cy.get(selector).parent(selector) ,
            cy.contains('Transponster').parent('[value="td1_value"]')
        //siblings : پیدا کردن برادر یا خواهر
    })


})