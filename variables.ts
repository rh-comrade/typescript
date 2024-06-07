// Its supports all variable of js
/*
    String
    Number
    Array
    Object
    Null
    Bool
    any
*/

// variables

var x:string|number;

x=10;
console.log(x);
x='it can handle string as well as number data type as mention in its initilization'
console.log(x);


// Array
var arr1:number[] = [1,2,3]
var arra2:string[]=['a1','a2','shyam']
var arr:any[] = [1,2,3,4,{'a1':'ram','a2':'shyam'}]

console.log(arr);
// all array methods are same as js
var op:any= arra2.map(item=>console.log(item));
