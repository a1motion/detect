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
declare const _default: {
    ie: boolean;
    safari: boolean;
    firefox: boolean;
    opera: boolean;
    chrome: boolean;
    mac: boolean;
    win: boolean;
    ios: boolean;
    android: boolean;
    linux: boolean;
    desktop: boolean;
    mobile: boolean;
};
export default _default;
