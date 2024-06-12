// contract are set of rule which are use to designing component
// contracts write by using interface
// interface only contains rules not implementation 
var TV = {
    name: 'samsung',
    price: 35000.33,
    stock: true,
    qty: 2,
    total: function () { return this.price * this.qty; },
    rating: 4.8
};
console.log(TV);
