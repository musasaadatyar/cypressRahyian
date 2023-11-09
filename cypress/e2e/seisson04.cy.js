
// asynchronous | .then()
// promise : یک سری دستورات است که در جاوا اسکریپت ما میخواهیم برای ما انجام دهد
// sync (غیر همزمانی): اجرایی دستورات یکی یکی تا کامل شدن انجام می شود مثل سف برداشت پول
// Async (همزمانی): اجرای دستورات به طور غیر همزمان است یعنی یک دستوری داده میشود وبرای جواب دستور اولی صبر نمیکند دستور دوم داده میشود تا زمانی که نتیجه دستورات قلی می آید دستور بعدی پذیرفته میشود مثل پیشخدمت رستوران
// *اکثر دستورات جاوا اسکریپتی به صورت Async میباشد*
//اگر بخواهیم نتایج پشت سر هم باشد باید از callBack استفاده شود

describe('asynchronous',() => {
    it('1-what is async?', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get("a[id='js-link-box-en']").click()
        cy.url().should('contain','Main_Page')
            .wait(3000).then(() => {
                console.log('test is finished')
        })

    })

    // *دستورات غیر تایپ اسکریپتی در همان لحظه اجرا میشود برای جلوگیری از این امر باید روش زیر را استفاده کرد*
    // cy.get(selector).then((var)=>{code block})
    // cy.get(selector).then((var)=> function() )

    it('assert text of field', () => {
        cy.visit('https://play2.automationcamp.ir/')
        cy.get('#fname').type('cypress').then( (el) => {
            let input_value =el.val()
            expect(input_value).to.eq('cypress')
        })
    })

    it('Api assertion', function () {
        fetch('https://api.spacexdata.com/v3/missions')
            .then( (res) => {
                res.json()
                    .then((data)=> {
                        console.log(data)
                    })
            })
    });

    it('random number', () => {
        cy.visit('cypress/support/random_number.html')
            .then(()=>{
                let fund7 = false;
                while (!fund7) {

                }
            })


    })
    //  *این مورد بالا باعث می شود که سیستم مموری آن درگیر شود برای حل این مشکل از روش زیر استفاده میکنیم *

    it( 'random_number', () => {
        const reloadAndCheck = () => {
            cy.get('#result').should('not.be.empty')
                .invoke('text').then(parseInt)
                .then((number) => {
                    if( number === 7 ) {
                        cy.log('number **7** Found');
                        return
                    } else {
                        cy.wait( 200, {log: false})
                        cy.reload()
                        reloadAndCheck()
                    }
                })
        }
        cy.visit('cypress/support/random_number.html')
        reloadAndCheck()
    })


    it.only('use for debugger', () => {
        cy.visit('https://play2.automationcamp.ir/')
        cy.get('#fname').type('Cypress').then( (el)=> {
            debugger
            let input_element = el.val()
            expect( input_element).eq('cypress')
        })
    })

})