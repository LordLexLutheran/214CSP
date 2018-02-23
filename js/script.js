import EventSource from "EventSource";
import CSSStyleRule from "CSSStyleRule";

//Modular code from Jorge Gonzalez: https://stackoverflow.com/users/2443581/jorge-gonzalez
function getCSSRule(ruleName) {
    ruleName = ruleName.toLowerCase();
    var result = null;
    var find = Array.prototype.find;

    find.call(document.styleSheets, styleSheet => {
        result = find.call(styleSheet.cssRules, cssRule => {
            return cssRule instanceof CSSStyleRule 
                && cssRule.selectorText.toLowerCase() == ruleName;
        });
        return result != null;
    });
    return result;
}