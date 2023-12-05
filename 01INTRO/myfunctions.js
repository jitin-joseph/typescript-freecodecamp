"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(4);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("jitin");
function signUpUser(name, email, isPaid) {
}
signUpUser("jitin", "jitin@local.dev", true);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("jitin", "jitin@local.dev");
