"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesByStyleName = void 0;
const style_properties_1 = require("./static/css/style-properties");
/**
 * example: font-size => fontSize
 */
function toHumpName(name) {
    const t = name.split('-');
    return t.reduce((pre, cur, i) => i === 0 ? cur : pre + cur.slice(0, 1).toUpperCase() + cur.slice(1), '');
}
function getPropertiesByStyleName(text) {
    const styles = text.split(';');
    if (styles.length > 0) {
        const styleName = styles[styles.length - 1];
        if (styleName.includes(':')) {
            const name = toHumpName(styleName.split(':')[0].replace(/\s*/g, ''));
            return style_properties_1.STYLE_PROPERTIES.properties[name].values;
        }
    }
    return null;
}
exports.getPropertiesByStyleName = getPropertiesByStyleName;
//# sourceMappingURL=helpers.js.map