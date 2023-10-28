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

    // it('children', () => {
        // cy.visit('https://play2.automationcamp.ir/')
    // 3: relatives
        // children() =>
            // cy.get(selector).children() ,
            // cy.get('#owc').children()

            // cy.get(selector).children(selector)
            // cy.get('#owc').children('[value="option 2"]').click()

        // parent()
            // cy.get(selector).parent() ,
            // cy.contains('Transponster').parent()

            // cy.get(selector).parent(selector) ,
            // cy.contains('Transponster').parent('')
        //siblings : پیدا کردن برادر یا خواهر
        // cy.get('#owc').children('[value="option 2"]').siblings().should('have.length',2)
    // })

    //4: پیدا کردن اجداد (بالا تر از پدر) ancestor
    // it('ancestor', () => {
    //     cy.visit('https://en.wikipedia.org/wiki/Main_page')
    //     cy.get('cite_ref-5').parent()
    //     cy.get('div#map-welcome').parent('div#mw-content-text')
    //     cy.get('div#map-welcome').parent('#bodyContent')
    // })

    // 5: descendant => پیدا کردن نوادگان
    // it('descendant', () => {
    //     cy.visit('https://en.wikipedia.org/wiki/Main_page')
        // 1: find()
        // cy.get(selector).find(selector)
        // cy.get('#bodyContent').find('div#mw-con.ent-text')

        // 2: within() درون آن یک تابع نوشته میشود که حتما به همراه get نوشته میشود
        // cy.get(selector).within(() => {
        //     <code></code>
        // })
        // cy.get('#bodyContent').within( ()=>{
        //     cy.get('div#mw-content-text')
        // })
    // })

    //6: *اگر از یک سلکتور چند مورد پیدا شد و راهی برای انتخاب کردن آن وجود نداشته باشد  یاسد از ایندکس آن استفاده شود
    // it('index',() => {
        // cy.visit('https://play2.automationcamp.ir/')
        // find with  index number
        // index => cy.get(selector).eq(index)
        // cy.get('td').eq(2)

        // find with first index
        // cy.get(selector).first()
        // cy.get('td').first()

       // find with last index
        // cy.get(selector).last()
        // cy.get('td').last()

        // 7: filter => وقتی میخواهیم از یک مجموعه ای  یکی را انتخاب کنیم از فیلتر استفاده میکنیم
        // cy.get('selector').filter('selector')
        // cy.get('td').filter('#td_id')

        //  not => وقتی میخواهیم یک مجموعه ای را انتخاب کنیم به جز یک مورد
        // cy.get('selector').not('selector')
        // cy.get('td').not('#td_id')
    // } )

    it('traversal', ()=>{
        cy.visit('https://play2.automationcamp.ir/')

        // 8: .closest(selector) => نزدیک ترین والدی که به اون مرحله خودش داره را برام پیدا کن
        cy.get('#fname').closest('div').should('have.class','main')

        // 9: .next(selector) => اولین سیبلینگ بعد از خودش
        cy.get('[value="td1_value"]').next()

        // 10: .nextAll(selector) => همه سیبلینگ ها بعد از آن
        cy.get('[value="td1_value"]').nextAll()

        // 11: .nextUntill(selector) =>  همه سیبلینگ ها بعد از خودش تا یک سلکتور خاص انتخاب میکند
        cy.get('[value="td1_value"]').nextUntil('[value="td4_value"]')

        // 12: .prev(selector) => اولین سیبلینگ  قبل از خودش
        cy.get('[value="td5_value"]').prev()

        // 13: .prevAll(selector) => همه سیبلینگ بعد از خودش
        cy.get('[value="td5_value"]').prevAll()

        // 14: .prevUntill(selector) => همه سیبلینگ های قبل از خودش تا اونی که مشخص میکنیم
        cy.get('[value="td5_value"]').prevUntil('[value="td1_value"]')
    //

    })
})