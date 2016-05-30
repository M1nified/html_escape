describe("class HtmlTextEscape",()=>{
    describe("public static fixOrphans",()=>{
        it("should fix all orphans",()=>{
            expect(HtmlTextEscape.fixOrphans("Jestem sam w domu, siedze na kanapie. Ja. Nie tu."))
            .toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie. Ja. Nie tu.")
            
            expect(HtmlTextEscape.fixOrphans("In this example above, you can see that “widows” appear in a few places."))
            .toBe("In&nbsp;this example above, you can see that “widows” appear in&nbsp;a&nbsp;few places.");
        })
    })
    describe("public static fixAll",()=>{
        it("should fix whole text",()=>{
            expect(HtmlTextEscape.fixAll("Jestem sam w domu, siedze na kanapie."))
            .toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie.")
        })
    })
})