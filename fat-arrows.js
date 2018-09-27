    
// example of classic function    
var a = function(myParam) {    
    
    let myVar = myParam;        
    console.log(myVar);
}    

// example of fat arrow function
var b = (myParam) => {

    let myVar = myParam;        
    console.log(myVar);
}    

// example of classic function which just returns a value
var c = function(myParam) {
    return myParam;
}

// example of fat arrow function which just returns a value
var d = (myParam) => {
    return myParam;
}    
var e = (myParam) => myParam;
var f = myParam => myParam;


/* ========= 
    Execution 
    ========= */

a("hello!");
b("hello!");

console.log( c("hello!") );
console.log( d("hello!") );
console.log( e("hello!") );
console.log( f("hello!") );
