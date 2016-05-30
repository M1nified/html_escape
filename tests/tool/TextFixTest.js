describe("class TextFix",()=>{
    describe("public static fixOrphans",()=>{
        it("should fix all orphans",()=>{
            expect(TextFix.fixOrphans("Jestem sam w domu, siedze na kanapie.")).toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie.")
        })
    })
    describe("public static fixAll",()=>{
        it("should fix whole text",()=>{
            expect(TextFix.fixAll("Jestem sam w domu, siedze na kanapie.")).toBe("Jestem sam w&nbsp;domu, siedze na&nbsp;kanapie.")
        })
    })
})