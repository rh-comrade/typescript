//  Objects
// all propterties of object is compalsary
// we can write optional properties by using "?"  
var obj = {
    name: 'Samsung',
    qty: 52,
    price: 37999
};
// console.log("\n    Name: ".concat(obj.name, "\n\n    Quantity: ").concat(obj.qty, "\n\n    Price: ").concat(obj.price, "\n\n    "));
// array of objects
var products = [
    { name: 'Samsung Tv', price: 35999 },
    { name: 'Sony Speakers', price: 12999 },
    { name: 'LG', price: 35999 },
    { name: 'OnePlus', price: 15999 }
];
products.map(function (_a) {
    var name = _a.name, price = _a.price;
    console.log("".concat(name, ": ").concat(price));
});
