//data types in javascript

//primitive data types
 let num = 10 //number
 let str = "hello" //string
 let bool = true; //boolean
 let undefinedval = undefined; //undefined
 let nullValue = null; //null
 let bigInt = 1234567890123456789012345678901234567890n; //bigint
 let symbol = Symbol("symbol"); //symbol

 console.log(num);
 console.log(str);
 console.log(bool);
 console.log(undefinedval);
 console.log(nullValue);
 console.log(bigInt);
 console.log(symbol);

 //typeof operator
 console.log(typeof num);
 console.log(typeof str);
 console.log(typeof bool);
 console.log(typeof undefinedval);
 console.log(typeof nullValue);
 console.log(typeof bigInt);
 console.log(typeof symbol);
 

//  non-primitive data types
let arr = [1,2,3,4,5]
console.log(arr);
console.log(typeof arr);
console.log(arr[6]);

let obg = {
    name: "sharif",
    age: 19,
    goal: "full stack web developer"
}
console.log(obg.goal);

function myFunction() {
    console.log("this is a function");
}
console.log(typeof myFunction);
myFunction();