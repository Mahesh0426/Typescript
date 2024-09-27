"use strict";
const score = [];
const names = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
}
// identity3(3)
function identity4(val) {
    return val;
}
identity4({
    brand: "apple",
    type: 5,
});
// function getSearchProduct<T>(product:T[]):T{
//     // do dome database operations
//     const query = 3
//     return product[query]
// }
const getSearchProduct = (product) => {
    // do dome database operations
    const query = 3;
    return product[query];
};
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
function anotherFunation(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
console.log(anotherFunation(3, "4"));
