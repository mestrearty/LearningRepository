"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alertaTerminalMiddleware(req, res, next) {
    console.log("Requisição Recebida");
    next();
}
exports.default = alertaTerminalMiddleware;
//# sourceMappingURL=alertaTerminalMidellware.js.map