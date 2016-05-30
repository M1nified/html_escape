describe("class HtmlTextEscape",()=>{
    describe("public static fixOrphans",()=>{
        it("should fix all orphans",()=>{
            expect(HtmlTextEscape.fixOrphans("Jestem sam w domu, siedze na kanapie.")).toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie.")
        })
    })
    describe("public static fixAll",()=>{
        it("should fix whole text",()=>{
            expect(HtmlTextEscape.fixAll("Jestem sam w domu, siedze na kanapie.")).toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie.")
        })
    })
})