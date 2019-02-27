(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = (function () {
        var _a = window.navigator, platform = _a.platform, userAgent = _a.userAgent;
        var mac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(platform) !== -1;
        var win = ["Win32", "Win64", "Windows", "WinCE"].indexOf(platform) !== -1;
        var ios = ["iPhone", "iPad", "iPod"].indexOf(platform) !== -1;
        var android = !mac && !win && !ios && /Android/.test(userAgent);
        var linux = !mac && !win && !ios && !android && /Linux/.test(platform);
        return {
            ie: /*@cc_on!@*/ false || !!document.documentMode,
            safari: /constructor/i.test(window.HTMLElement) ||
                (function (p) {
                    return p.toString() === "[object SafariRemoteNotification]";
                })(!window.safari ||
                    (typeof window.safari !== "undefined" &&
                        window.safari.pushNotification)),
            firefox: typeof window.InstallTrigger !== "undefined",
            opera: (!!window.opr && !!window.opr.addons) ||
                !!window.opera ||
                navigator.userAgent.indexOf(" OPR/") >= 0,
            chrome: !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
            mac: mac,
            win: win,
            ios: ios,
            android: android,
            linux: linux,
            desktop: mac || win || linux,
            mobile: ios || android
        };
    })();
});
