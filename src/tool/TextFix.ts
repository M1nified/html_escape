"use strict";
class TextFix{
    public static fixOrphans(input:string):string{
        let fixed = input.replace(/ \w\w? /g,(orphan)=>{
            return orphan.slice(0,orphan.length-1)+'&nbsp;';
        })
        return fixed;
    }
    public static fixAll(input:string):string{
        let fixed = TextFix.fixOrphans(input);
        return fixed;
    }
}