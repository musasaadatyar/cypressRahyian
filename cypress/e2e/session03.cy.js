///< reference types ="cypress" />
// mouse & keyboard Actions

describe( 'mouse & keyboard', () => {
    it('type', ()=> {
        cy.visit('https://www.google.com/')
            // 1: type => نوشتن داخل فیلد
        cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس ')

         // 2 :enter => زدن enter
        cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس {enter}')
        //  3: https://docs.cypress.io/api/table-of-contents ==> تمام اکشن های مربوط به سایپرس در اینجا وجود دارد
    })

    it('4-keyboard Action ', () => {
        //فشار دادن چند دکمه کیبورد با هم هم زمان
        cy.visit('https://www.google.com/')
        cy.get('textarea[id="APjFqb"]').type("cypress{backspace}{home}{del}")
    });

    // 5: combination => یعنی یک کلید را فشار دهیم و نگاهداریم و یک کلید دیگر را هم فشار دهیم
    it('combination',() => {
        cy.visit('https://www.google.com/')
        cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس ')
        cy.realPress(['Control', 'A'],{})

        // 6: clear => پاک کردن تمام متن ها
            .clear()

        //7: selectAll => همه اطلاعات مربوطه به داخل آن فیلد را انتخاب میکند
            .type('{selectAll}')

        //8: delete=> همه اطلاعات مربوطه به داخل آن فیلد را حذف میکند
            .type('{del}')
            .type('{selectAll} {backSpace}')

        // 9: delay => هنگام اکشن با یک اختلاف چند میلی سانیه ای انجام می شود
            .type('منفرد ',{delay:1000})

        // 10 : repeat() => تکرار کردن یک متن
            .type('تکرار کردن و انگیزه یادگیری'.repeat(3))
    })
})

describe('mouse action', () => {
    it('click / DB click / Right click ', () => {
        cy.visit('https://play2.automationcamp.ir/')
        // mouse action
        // 1: click => کلیک کردن
        cy.get('input[id="male"]').click()
        cy.get('input[id="male"]').should('be.checked')

        //2: DB click => دابل کلیک کردن
        // contains : => پیدا کردن متن است
        cy.contains('Double-click me').dblclick()
        cy.contains('Your Sample Double Click worked!')

        // 3: rightClick = > کلیک راست کردن
        cy.get('body').rightclick('top')

        // 4: {ctrlKey: true} = hold click => فشار دادن و نگه داشتن یک کلیک با آپشن انجام میشود
        cy.contains('Home').click({ctrlKey: true})

        // 5: Always click = {force: true} => همیشه تحت هر شرایط باید کلیک را انجام دهد
        cy.get('body').rightclick({force: true})
        cy.contains('Contact').click({ctrlKey: true})
    });

    it('mouse Hover', () => {
        cy.visit('test-hover.html')
        // mouse Hover =>  در سایپرس هاور وجود ندارد به جای آن می توان از  موارد زیر استفاده کرد
        //  1: mouse hover
        cy.get('#left11').should('not.be.visible')
        // *با تریگر دستور های جی کوری را اجرا میکنیم*
        cy.get("#menu1").trigger('mouseover')
        cy.get('#left11').should('be.visible')

        // *اگر رفتار کلاس های هاور با سودو کلاس کنترل شده باشد باید از روش زیر استفاده شود*
        cy.get("#menu2").realHover({})

        // });

        it('long press (click and Hold)', () => {
            cy.visit('https://demos.telerik.com/kendo-ui/circular-gauge/index')
            cy.get('.gual_x_svg_dash').click()
            cy.get('#onetrust-accept-btn-handler').click()

            // 2: click and hold
            cy.get('[role=button][title=Increase]').trigger('mousedown', {which: 1})
                .wait(2000).trigger('mouseup', {force: true})
            //  // روش دوم اگر تریگر نشود
            cy.get('[role=button][title=Increase]').realMouseDown({})

            // *invoke: > یک تابع قبلی را با دستور قبلی چین میکند*
            cy.get('[role=slider]').invoke('attr', 'aria-valuenow').should('not.equal', '55')
        })

        it('drag & drop', () => {
            cy.visit('https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2')
            // //    1: روش اول از طریق مشخصات فایل
            cy.get('#drag1').trigger('mousedown', {which: 1})
            cy.get('#div2').trigger('mousemove').trigger('mouseup', {force: true})

            //  2: realMouseMove => روش دوم است که بعد از وقتی که موس را کلیک کردی و نگه داشتی سپس در یک مختصات آن را رها میکنی
            cy.get('#drag1').trigger('mousedown', {which: 1})
                .realMouseMove(300, 100)
                .realMouseUp()
        });
    })
})

describe('scroll', function () {
    // 1: scroll page to Position
        it('scroll page to Position', () => {
            cy.visit('https://www.imdb.com/chart/top/')
            cy.scrollTo('bottom')
        })

    // 2:scroll to coordination
        it('scroll to coordination', ()=>{
            cy.visit('https://www.imdb.com/chart/top/')
            cy.scrollTo(0, 1000)
        })

    //3: scroll page by pixel
        it('scroll page by pixel ', function () {
            cy.visit('https://www.imdb.com/chart/top/')
            cy.scrollTo('0px', '4000px')
        });

    //4: scroll page by percentage
        it('scroll page by percentage', function () {
            cy.visit('https://www.imdb.com/chart/top/')
                cy.scrollTo('0%', '40%')
        });

    // 5: scroll element - into view
        it('should ', function () {
            cy.visit('https://www.imdb.com/chart/top/')
            cy.get(':nth-child(245)').scrollIntoView()
        });

    // 6: scroll element - to Position
        it('scroll element - to Position ', function () {
            cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
            cy.scrollTo("100%", "10%")
            cy.get('.dataTables_scrollBody').scrollTo('right')
        });

    // 7: scroll by coordination
        it('scroll to coordination', function () {
            cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
            cy.scrollTo('100%', '10%')
            cy.get('.dataTables_scrollBody').scrollTo('50%','50%')
        });

    //8: scroll element by percentage
        it('scroll by element by percentage', function () {
            cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
            cy.scrollTo('100%','10%')
            cy.get('.dataTables_scrollBody').scrollTo('50%','50%')
        });

    // 9:scroll with duration
        it('scroll with duration', function () {
            cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
            cy.scrollTo('100%','10%')
            cy.get('.dataTables_scrollBody').scrollTo('center',{ duration: 3000 })
        });


    // 10: SCROLL WITH LINE EASING
        it('scroll with line easing', function () {
        cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
        cy.get('.dataTables_scrollBody').scrollTo('center', { easing: "linear" })
    });
});