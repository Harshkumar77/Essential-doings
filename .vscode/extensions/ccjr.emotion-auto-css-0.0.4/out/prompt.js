"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveCompletionItem = exports.provideCompletionItems = void 0;
const vscode_1 = require("vscode");
const helpers_1 = require("./helpers");
const style_names_1 = require("./static/css/style-names");
function provideCompletionItems(document, position, token, context) {
    const start = new vscode_1.Position(position.line, 0);
    const range = new vscode_1.Range(start, position);
    const text = document.getText(range);
    const resultItems = (0, helpers_1.getPropertiesByStyleName)(text);
    if (resultItems) {
        return resultItems.map((item) => new vscode_1.CompletionItem(`${item};`, vscode_1.CompletionItemKind.Property));
    }
    return style_names_1.STYLE_NAMES.map((item) => {
        return new vscode_1.CompletionItem(`${item}: `, vscode_1.CompletionItemKind.Property);
    });
}
exports.provideCompletionItems = provideCompletionItems;
function resolveCompletionItem(item, token) {
    return item;
}
exports.resolveCompletionItem = resolveCompletionItem;
//# sourceMappingURL=prompt.js.map