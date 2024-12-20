"use strict";
// tuples: It is a specific type of array where length and datatype at specific position of array is fixed.
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ["kashif", 1, true];
var rgb;
rgb = [255, 255, 255];
var newUser = [112, "k@gmail.com"];
newUser[1] = "a@gmail.com";
newUser.push(true);
console.log(newUser);
