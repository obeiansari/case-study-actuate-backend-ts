"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = void 0;
const getUserByID = (req, res) => {
    const userID = req.params.id;
    res.send('UserID');
};
exports.getUserByID = getUserByID;
