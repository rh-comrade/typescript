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


// array of objects
var products:{name:string,price:number}[]=[
    {name:'Samsung Tv',price:35999},
    {name:'Sony Speakers',price:12999},
    {name:'LG',price:35999},
    {name:'OnePlus',price:15999}
]

products.map(({name,price})=>{
    console.log(`${name}: ${price}`);
})