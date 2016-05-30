"use strict";
class HtmlTextEscape{
    public static fixOrphans(input:string):string{
        let fixed = input
        .replace(/\w\w? /g,(orphan)=>{
            return orphan[0].toUpperCase() === orphan[0] ? orphan.slice(0,orphan.length-1)+'&nbsp;' : orphan;
        })
        .replace(/( |(&nbsp;))\w\w? /g,(orphan)=>{
            return orphan.slice(0,orphan.length-1)+'&nbsp;';
        })
        .replace(/( |(&nbsp;))\w\w? /g,(orphan)=>{
            return orphan.slice(0,orphan.length-1)+'&nbsp;';
        })
        return fixed;
    }
    public static fixAll(input:string):string{
        let fixed = HtmlTextEscape.fixOrphans(input);
        return fixed;
    }
}