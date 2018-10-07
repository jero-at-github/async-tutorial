
/**
 * "var" is function scope
 */
function a() {    
    
    var myVar = 2;    

    console.log(myVar);
}    


/**
 * "var" c is closest function scope
 */
function b() {    

    (function _b() {
        
        var myVar = 2;        
    })();
    
    console.log(myVar); // result: myVar is not defined
}    

/**
 * "var" is NOT block scope
 */
function c() {    

    var myVar = 0;

    // block - #1
    {
        var myVar = 1;
    }

    console.log("Result after block 1: " + myVar);    

    // block "if" - #2
    if (true) {
        var myVar = 2;
    }

    console.log("Result after block 2: " + myVar);   

    // block "for" - #3
    for (counter = 1; counter == 1; counter ++) {
        var myVar = 3;
    }   
    
    console.log("Result after block 3: " + myVar); 

    //result: 0, 1, 2, 3    
}    

/**
 * "let" is block and function scope
 */
function d() {    

    let myVar = 1;

    if (true) {
        let myVar = 2;
    }

    console.log(myVar); // result: 1
}   

/**
 * Redeclarations are allowed with "var"
 */
function e() {

    var myVar = "hello";
    var myVar = "bye!";

    console.log(myVar); // result: bye
}

/**
 * Redeclarations are NOT allowed with "let"
 */
function f() {

    let myVar = "hello";
    let myVar = "bye!";

    console.log(myVar); // result: error
}

/**
 * Temporal dead zone (hoisting)
 */
function g() {
    
    console.log("The value of bar is: " + bar); // undefined, var uses hoisting
    console.log("The value of foo is: " + foo); // ReferenceError, let doesn't use hoisting

    var bar = 1;
    let foo = 2;
}

/**
 * EXECUTION
 */