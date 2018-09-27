

function a() {    
    
    var myVar = 2;    

    console.log(myVar);
}    

function b() {    

    var myVar = 0;

    // block 
    {
        var myVar = 1;
    }

    console.log(myVar);    

    // block - if
    if (true) {
        var myVar = 2;
    }

    console.log(myVar);    

    // block - for
    for (counter = 1; counter == 1; counter ++) {
        var myVar = 3;
    }   
    
    console.log(myVar);    
}    

function c() {    

    (function _c() {
        
        var myVar = 2;        
    })();
    
    console.log(myVar);
}    

function d() {    

    if (true) {
        let myVar = 2;
    }

    console.log(myVar);
}    

function e() {    
    
    if (true) {
        let myVar = 2;
    }

    console.log(myVar);
}   


/* ========= 
Execution 
========= */

// Redeclarations are allowed with "let"
//var a = "hello";
//var a = "bye!";

// Redeclarations are not allowed with "let"
//let a = "hello";
//let a = "bye!";

// Temporal dead zone (hoisting)
function do_something() {

    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2;
  }

  do_something()