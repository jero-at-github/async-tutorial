    
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
    test: function() {

        console.log("The value of myExternalValue is " + this.greeting);
        
        function subFunction(that) {
            console.log("The value of myExternalValue in the sub function is " + that.greeting);
        }

        let subFunction2 = () => {
            console.log("The value of myExternalValue in the sub function is " + this.greeting);
        }

        subFunction(this);
        subFunction2();

        /*        
        [1,2,3].forEach(function(element) {

            console.log(this.greeting + " number " + element);
        });
        */
        
        /*
        // using a helper variable
        var that = this;
        [1,2,3].forEach(function(element) {

            console.log(that.greeting + " number " + element);
        });
        */  
    
        /*
        // using bind
        [1,2,3].forEach(function(element) {

            console.log(this.greeting + " number " + element);
        }.bind(this));
        */
      
        /*
        // using fat arrows
        [1,2,3].forEach(element => {

            console.log(this.greeting + " number " + element);
        });
        */
    }    
}

//testingThis.test();


var myValue = "hello";

function testing() {
    
    //var myValue = "hello";
    console.log(this.myValue);

}

testing();




/* ========= 
    Execution 
    ========= */
