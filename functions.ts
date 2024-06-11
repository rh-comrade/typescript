function test_23(msg:string){
    console.log(`message from test: ${msg}`);
}

test_23('welcome to ts function');


// arrow function
const test_11 = (n1:number,n2:number): number=>{
    return n1+n2
}

console.log(test_11(10,20));



// callbacks

const HOF = (cb:Function, msg:string)=>{
    return cb(msg);
}

HOF(test_23,'HOF callbacks')