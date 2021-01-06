declare global {
    interface Document {
        createStyleSheet: Function;
    }

    interface CSSRule {
        selectorText: string;
    }
}

export function polyfill_createStyleSheet() {
    if (!document.createStyleSheet) {
        document.createStyleSheet = (function () {
            function createStyleSheet({href, title}: { [key: string]: string } = {}) {
                let element;
                if (href !== undefined) {
                    element = document.createElement('link');
                    element.type = 'text/css';
                    element.rel = 'stylesheet';
                    element.href = href;
                    element.title = title;
                } else {
                    element = document.createElement('style');
                }

                document.getElementsByTagName('head')[0].appendChild(element);
                return document.styleSheets[document.styleSheets.length - 1];
            }

            return createStyleSheet;
        })();
    }
}
