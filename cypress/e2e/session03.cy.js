///< reference types ="cypress" />
// mouse & keyboard Actions



// describe( 'mouse & keyboard', () => {
    // it('type', ()=> {
    // cy.visit('https://www.google.com/')
        // 1: type => نوشتن داخل فیلد
        // cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس ')

         // 2 :enter => زدن enter
        // cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس {enter}')
    //     3: https://docs.cypress.io/api/table-of-contents ==> تمام اکشن های مربوط به سایپرس در اینجا وجود دارد
    // })

    // it('4-keyboard Action ', () => {
    //     cy.visit('https://www.google.com/')
    //     cy.get('textarea[id="APjFqb"]').type("cypress{backspace}{home}{del}")
    // });

    // 5: combination => یعنی یک کلید را فشار دهیم و نگاهداریم و یک کلید دیگر را هم فشار دهیم
    // it('combination',() => {
    //     cy.visit('https://www.google.com/')
    //     cy.get('textarea[id="APjFqb"]').type('آموزش سایپرس ')
    //     cy.realPress(['Control', 'A'],{})

        // 6: clear => پاک کردن تمام متن ها
        // .clear()

        //7: selectAll => همه اطلاعات مربوطه به داخل آن فیلد را انتخاب میکند
        //     .type('{selectAll}')

        //8: delete=> همه اطلاعات مربوطه به داخل آن فیلد را حذف میکند
        //     .type('{del}')
        //     .type('{selectAll} {backSpace}')

        // 9: delay => هنگام اکشن با یک اختلاف چند میلی سانیه ای انجام می شود
        //     .type('منفرد ',{delay:1000})

        // 10 : repeat() => تکرار کردن یک متن
        //     .type('تکرار کردن و انگیزه یادگیری'.repeat(3))
    // })

// })

describe('mouse action', () => {
    // it('click / DB click / Right click ', () => {
    //     cy.visit('https://play2.automationcamp.ir/')
        // mouse action
        // 1: click => کلیک کردن
        //     cy.get('input[id="male"]').click()
        //     cy.get('input[id="male"]').should('be.checked')

        //2: DB click => دابل کلیک کردن
        // contains : => پیدا کردن متن است
        //     cy.contains('Double-click me').dblclick()
        //     cy.contains('Your Sample Double Click worked!')

        // 3: rightClick = > کلیک راست کردن
        //     cy.get('body').rightclick('top')

        // 4: {ctrlKey: true} = hold click => فشار دادن و نگه داشتن یک کلیک با آپشن انجام میشود
        // cy.contains('Home').click({ctrlKey: true})

        // 5: Always click = {force: true} => همیشه تحت هر شرایط باید کلیک را انجام دهد
        //  cy.get('body').rightclick({force: true})
        //  cy.contains('Contact').click({ctrlKey: true})
    // });

    // it('mouse Hover', () => {
        // cy.visit('test-hover.html')
    // mouse Hover =>  در سایپرس هاور وجود ندارد به جای آن می توان از  موارد زیر استفاده کرد
    //  1: mouse hover
    //     cy.get('#left11').should('not.be.visible')
        // *با تریگر دستور های جی کوری را اجرا میکنیم*
        // cy.get("#menu1").trigger('mouseover')
        // cy.get('#left11').should('be.visible')

        // *اگر رفتار کلاس های هاور با سودو کلاس کنترل شده باشد باید از روش زیر استفاده شود*
        // cy.get("#menu2").realHover({})

    // });

    // it('long press (click and Hold)', () => {
    //     cy.visit('https://demos.telerik.com/kendo-ui/circular-gauge/index')
    //     cy.get('.gual_x_svg_dash').click()
    //     cy.get('#onetrust-accept-btn-handler').click()
    //     // 2: click and hold
    //     cy.get('[role=button][title=Increase]').trigger('mousedown',{which:1})
    //         .wait(2000).trigger('mouseup',{force: true})
    //     // روش دوم اگر تریگر نشود
    //     cy.get('[role=button][title=Increase]').realMouseDown({})
    //
    //     // *invoke: > یک تابع قبلی را با دستور قبلی چین میکند*
    //     cy.get('[role=slider]').invoke('attr','aria-valuenow').should('not.equal','55')
    // })

//     it('dragAndDrop', () => {
//         cy.visit('https://play2.automationcamp.ir/')
//         cy.get('#drag1').trigger('mousedown',{ which: 1 })
//         cy.get('#div2').trigger('mousemove').trigger('mouseup',{force: true})
//     });
//
})