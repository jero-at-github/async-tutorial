
/**
 * Function which returns a random number between 1 and 10
 */
let generateRnd = () => Math.floor(Math.random() * 10) + 1;

/**
 * Function which retreives the result of an asyc function NOT using callbacks
 */
var a = function() {

    setTimeout(function() {

        return generateRnd(); 
    }, 1000);

}    

/**
 * Function which retreives the result of an asyc function using callbacks
 */
let b = (myCallback) => {

    // generate random number after 1 second
    setTimeout(function() {

        let result = generateRnd(); 
        
        // callback execution
        myCallback(result);  

    }, 1000);

}

/**
 * Dependent function example
 */
let c = function(myCallback, previousRndNumber = 0) {

    // generate random number after 1 second
    setTimeout(function() {

        let rndNumber = generateRnd();    
        console.log("rdnNumber: " + rndNumber);                     
        
        myCallback(rndNumber + previousRndNumber);                                           

    }, 1000);
}


/* ========= 
    Execution 
    ========= */

/**
 * Testing generateRnd function
 */
//console.log( generateRnd() );


/**
 * Trying to get the result of an async function
 */
//console.log( a() );


/**
 * Getting the result of an async function using callbacks
 */

/*
//using fat arrows declaration
b( (result) => {console.log(result)} );

// using function declaration
b(function(result) {
    console.log(result)
});
*/


/**
 * Building a dependent function example
 */
/*
c( (result) => {

    console.log("Total sum: " + result);        
});
*/   
 

/**
 * Executing 5 dependent functions
 */
/*
c(function(previousRndNumber) {

    c(function(previousRndNumber) {

        c(function(previousRndNumber) {

            c(function (previousRndNumber) {

                c(function(previousRndNumber) {

                    console.log("Total: " + previousRndNumber);

                }, previousRndNumber);

            }, previousRndNumber);

        }, previousRndNumber);

    }, previousRndNumber);

}, 0);
*/    

/*
let results = [];

for (var conta = 0; conta <= 4; conta ++) {

    c(function(previousRndNumber) {
        results.push(previousRndNumber);    

        if (results.length == 5) {
            console.log(results);
        }
    }, 0);
}
*/
