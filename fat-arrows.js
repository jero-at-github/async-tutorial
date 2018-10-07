    
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


/**
 * Lexical scoping (this) 
 */
var testingThis = {

    greeting: "Hello",    
    greet: function() {

        console.log("The value for my greetin is " + this.greeting);
                      
        // Let's try to use "this" in an function which is out of scope
        [1,2,3].forEach(function(element) {

            console.log(this.greeting + " number " + element);
        });        

        // Alternatives:

        // using a helper variable
        var that = this;
        [1,2,3].forEach(function(element) {

            console.log(that.greeting + " number " + element);
        });          
            
        // using bind
        [1,2,3].forEach(function(element) {

            console.log(this.greeting + " number " + element);
        }.bind(this));        
      
        
        // using fat arrows
        [1,2,3].forEach(element => {

            console.log(this.greeting + " number " + element);
        });
        
    }    
}

//testingThis.greet();



/* ========= 
    Execution 
    ========= */
