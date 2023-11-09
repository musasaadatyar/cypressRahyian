describe('test', () => {

    it('multiple element ', () => {
        cy.visit('https://www.wikipedia.org/')
        //همه مقادیر به دست می آورد
        cy.get('a[id*="js-link-box"]').should('have.length', 10)
        //مقداری که دارای english است را به دست می اورد
        cy.get('a[id*="js-link-box"]').should('contain.text', 'English')
        //مقداری که دارای Engli است را به دست می اورد
        cy.get('a[id*="js-link-box"]').should('contain.text', 'Engli')
        //بر روی مقدار با index0 به دست بیاورید
        cy.get('a[id*="js-link-box"]').eq(0).click()
        //بر روی مقدار با index -2 به دست بیاورید
        cy.get('a[id*="js-link-box"]').eq(-2).click()
        // روی اولین مورد کلیک کن
        cy.get('a[id*="js-link-box"]').first().click()
        // روی آخرین مورد کلیک کن
        cy.get('a[id*="js-link-box"]').last().click()
    });

    it('using each()', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('a[id*="js-link-box"]').each(function (el, index, $listOfElement) {
            // cy.log($el.text());
            // cy.log(index);
            // cy.log($listOfElement.length)

            // click with index
            if (index === 6) {
                el.trigger('click')
            }

            // click by text
            if (el.text().includes('Eng')) {
                el.click()
                el.trigger('click')
            }
        })

    })

    //tables
    it('tables', () => {
        cy.visit('https://play2.automationcamp.ir/')
        cy.scrollTo('bottom')
        cy.get('tr').then((list) => {
            console.log(list.length);
        })
        cy.get('tr').should('have.length', 7)
        // sudo class: (th:first-child ,اولین فرزند), (th:last-child, آخرین فرزند),(:nth-child(3),چندمین فرزند), (,)
        cy.get('table th').eq(2).should('have.text', 'Gender')
        //* مورد بالا را میتوان به صورت زیر نیز نوشت *
        cy.get('table th:eq(2)').should('have.text', 'Gender')
        cy.get('table th:eq(2)').should('have.text', 'Gender')
        //    پیدا کردن یک مقدار در یک ردیف در جدول
        //    1: =>
        cy.get('tbody>tr:eq(2)>td:eq(0)').then(function ($el) {
            expect($el.text()).eq('Pheobe')
        })
        //2: tow way => همه موارد زیر یک معنی و یک کار را میکنند
        cy.get('tbody>tr').eq(2).within(() => {
            cy.get('td:first-child').should('have.text', 'Pheobe')
            cy.get('td:eq(0)').should('have.text', 'Pheobe')
            cy.get('td').eq(0).should('have.text', 'Pheobe')
            cy.get('td').first().should('have.text', 'Pheobe')
        })
    })

    //    3: پیدا کردن یک سلول و به دست آوردن مقدار سلول بعدی
    it('get specific cell value based on another cell value', function () {
        cy.visit('https://play2.automationcamp.ir/')
        cy.scrollTo('bottom')

        //1: وقتی که ما میدانیم ایندکس ستون شغل ها چند است
        cy.get('table').contains('Smith').parent().within(() => {
            cy.get('td').eq(4).should('have.text', 'Actor')
        })

        //2 وقتی ما نمیدانیم ستون شغل ها چند است (اول این ایندکس را به دست میاوریم و سپس مقدار را نقش را به دست مس آوریم)
        cy.get('tbody th').each((el, index, list) => {
            console.log(el.text())
            if (el.text() === 'Occupation') {
                console.log(index)
                cy.get('table').contains('Smith').parent().within(() => {
                    cy.get('td').eq(index).should('have.text', 'Actor').click()
                })
            }
        })
    })

    // cy.wrap() => المنت های جیکوری را به سایپرس تبدیل میکند تا بتوانیم چین انجام دهیم
    it('use wrap()', () => {
        cy.visit('https://play2.automationcamp.ir/')
        cy.scrollTo('bottom')
        cy.get('tr').each((row, index, list) => {
            if (index > 0) {
                cy.wrap(row).within(() => {
                    cy.get('td').each((cellData, cellIndex, cellList) => {
                        cy.log(cellData.text())
                        // **اگر بگوییم در این لیست فلان اسم نیز موجود باشد **
                        expect(cellList).to.contains('Rechard')
                    })
                })
            }
        })
    });

    //using array
    it.only('Using array', function () {
        cy.visit('https://play2.automationcamp.ir/')
        cy.scrollTo('bottom')
        let listt = [];
        cy.get('tbody th').each((el, index, list) => {
            console.log(el.text())
            if (el.text() === 'FirstName') {
                console.log(index)
                cy.get(`tr>td:nth-child(${index + 1})`).each((val) => {
                    list.push( val.text() )
                    list.push( val )
                    cy.log(el.text())
                })
            }
        }).then(() => {
            console.log(listt)
            console.log(JSON.stringify(listt))
            expect(listt).to.contains('Richard')
        })
    });

})