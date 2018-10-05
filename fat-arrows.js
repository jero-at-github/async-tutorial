    
/**
 * Example of classic function decalaration
 */
var a = function(myParam) {    
    
    let myVar = myParam;        
    console.log(myVar);
}    

/**
 * Example of fat arrow function declaration
 */
var b = (myParam) => {

    let myVar = myParam;        
    console.log(myVar);
}    

/**
 * Example of classic function declaration which just returns a value
 */
var c = function(myParam) {
    return myParam;
}

/**
 * Example of fat arrow function declaration which just returns a value 
 */
var d = (myParam) => {
    return myParam;
}    

var d2 = (myParam) => myParam;

var d3 = myParam => myParam;


/* ========= 
    Execution 
    ========= */

console.log( d3("hello") );
