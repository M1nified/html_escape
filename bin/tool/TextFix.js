"use strict";
var TextFix = (function () {
    function TextFix() {
    }
    TextFix.fixOrphans = function (input) {
        var fixed = input.replace(/ \w\w? /g, function (orphan) {
            return orphan.slice(0, orphan.length - 1) + '&nbsp;';
        });
        return fixed;
    };
    TextFix.fixAll = function (input) {
        var fixed = TextFix.fixOrphans(input);
        return fixed;
    };
    return TextFix;
})();
//# sourceMappingURL=TextFix.js.map