declare global {
  interface Document {
    documentMode?: any;
  }
  interface Window {
    HTMLElement?: any;
    safari?: any;
    InstallTrigger?: any;
    opr?: any;
    opera?: any;
    chrome?: any;
  }
}
export default (() => {
  const { platform, userAgent } = window.navigator;
  const mac =
    ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(platform) !== -1;
  const win = ["Win32", "Win64", "Windows", "WinCE"].indexOf(platform) !== -1;
  const ios = ["iPhone", "iPad", "iPod"].indexOf(platform) !== -1;
  const android = !mac && !win && !ios && /Android/.test(userAgent);
  const linux = !mac && !win && !ios && !android && /Linux/.test(platform);
  return {
    ie: /*@cc_on!@*/ false || !!document.documentMode,
    safari:
      /constructor/i.test(window.HTMLElement) ||
      (p => {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window.safari ||
          (typeof window.safari !== "undefined" &&
            window.safari.pushNotification)
      ),
    firefox: typeof window.InstallTrigger !== "undefined",
    opera:
      (!!window.opr && !!window.opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0,
    chrome:
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),
    mac,
    win,
    ios,
    android,
    linux,
    desktop: mac || win || linux,
    mobile: android || ios,
  };
})();
