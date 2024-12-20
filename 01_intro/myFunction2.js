"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num+2;
    // return "Kashif";
    return num + 2;
}
// function getValue(myVal:number):boolean{
//   if (myVal>5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros=[1,"2",3];
heros.map(function (hero) {
    return "hero is a ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(5);
