"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
// here, I ahve to check whether it is boolean or number through if else typeof
function identityOne(val) {
    return val;
}
// not a good practice bcz parameter of number may give string return type
function identityTwo(val) {
    return val;
}
// It is a generic bcz parameter lock the type and return the same type
function identityThree(val) {
    return val;
}
// identityThree(true);
// shorthand generic
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({});
// Array generic and arrow function generics
function getSearchProducts(products) {
    // do some DB operation
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some DB operation
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
