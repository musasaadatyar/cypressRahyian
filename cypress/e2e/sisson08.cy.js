/// <reference types = 'cypress' />

//suit setup: قبل از اجرای دیسکرایب اجرا می شود و فقط یک بار اجرا می شود
before(function () {
    cy.log(' run before root level')
});

//suit teardown: بعد از اجرای دیسکرایب فقط یک بار اجرا می شود
after(function () {
    cy.log(' run after root level')
})

// test setup: قبل از اجرای هر تست یک بار اجرا می شود
beforeEach(function () {
    cy.log('TEST SETUP root level')
})

//test teardown: بعد از اجرای تست نیز هر بار اجرا می شود
afterEach(function () {
    cy.log(' TEST TEARDOWN root level')
})
describe.only('describe Block', function () {
    //suit setup: قبل از اجرای دیسکرایب اجرا می شود و فقط یک بار اجرا می شود
    before(function () {
        cy.log(' run before describe Block')
    });

    //suit teardown: بعد از اجرای دیسکرایب فقط یک بار اجرا می شود
    after(function () {
        cy.log(' run after describe Block')
    })

    // test setup: قبل از اجرای هر تست یک بار اجرا می شود
    beforeEach(function () {
        cy.log('TEST SETUP')
    })

    //test teardown: بعد از اجرای تست نیز هر بار اجرا می شود
    afterEach(function () {
        cy.log(' TEST TEARDOWN')
    })

    //test tearDown
    it('test1 in describe Block', function () {
        cy.log('test1 in describe Block')
    })

    it('test2 in describe Block', function () {
        cy.log('test1 in describe Block')
    })

})

context('context Block', function () {
    specify('test1 context Block', function () {

    })
})


//type 1 of define function => پیشنهاد ide هم همینه
describe('NAME', function () {

})

//type 2 of define function
describe('Name', () => {

})

// only: وقتی روی یک دیسکرایپ یا تست قرار میگیرد می گوید که فقط همین را اجرا کن
//*روی هوک ها قرار نمیگیرند*
//skip: وقتی روی یک دیسکرایپ یا تست قرار میگیرد می گوید که این را اجرا نکن