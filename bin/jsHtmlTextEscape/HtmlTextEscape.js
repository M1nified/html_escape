"use strict";
var HtmlTextEscape = (function () {
    function HtmlTextEscape() {
    }
    HtmlTextEscape.fixOrphans = function (input) {
        var fixed = input
            .replace(/\w\w? /g, function (orphan) {
            return orphan[0].toUpperCase() === orphan[0] ? orphan.slice(0, orphan.length - 1) + '&nbsp;' : orphan;
        })
            .replace(/( |(&nbsp;))\w\w? /g, function (orphan) {
            return orphan.slice(0, orphan.length - 1) + '&nbsp;';
        })
            .replace(/( |(&nbsp;))\w\w? /g, function (orphan) {
            return orphan.slice(0, orphan.length - 1) + '&nbsp;';
        });
        return fixed;
    };
    HtmlTextEscape.fixAll = function (input) {
        var fixed = HtmlTextEscape.fixOrphans(input);
        return fixed;
    };
    return HtmlTextEscape;
})();
//# sourceMappingURL=HtmlTextEscape.js.map