"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
var errorHandle = function (req, res, message) {
    res.status(400).json({
        "status": "false",
        message: message
    });
    res.end();
};
exports.errorHandle = errorHandle;
