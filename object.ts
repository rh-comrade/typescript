//  Objects
// all propterties of object is compalsary
// we can write optional properties by using "?"  
var obj:{name:string,qty:number,price:number,rating?:number}={
    name:'Samsung',
    qty:52,
    price:37999
}

console.log(`
    Name: ${obj.name}\n
    Quantity: ${obj.qty}\n
    Price: ${obj.price}\n
    `);
