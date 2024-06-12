// contract are set of rule which are use to designing component
// contracts write by using interface
// interface only contains rules not implementation 

interface iproduct {
    name:string,
    price:number,
    stock:boolean,
    qty:number,
    total():number,
    rating?:number
}

var TV:iproduct = {
    name:'samsung',
    price:35000.33,
    stock:true,
    qty:2,
    total:()=>{
            return this.price*this.qty
            },
    rating:4.8
}

console.log(TV);
