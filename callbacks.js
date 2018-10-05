
let generateRnd = () => Math.floor(Math.random() * 10) + 1;

var a = function() {

    setTimeout(function() {

        return generateRnd(); 
    }, 1000);

}    
    
let b = (myCallback) => {

    // generate random number after 1 second
    setTimeout(function() {

        let result = generateRnd(); 
        
        // callback execution
        myCallback(result);  

    }, 1000);

}

let c = function(myCallback, previousRndNumber) {

    // generate random number after 1 second
    setTimeout(function() {

        let rndNumber = generateRnd();    
        console.log("rdnNumber: " + rndNumber);                     
        
        myCallback(rndNumber + previousRndNumber);                                           

    }, 1000);
}

// pyramid of doom!
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
    

let results = [];

for (var conta = 0; conta <= 4; conta ++) {

    c(function(previousRndNumber) {
        results.push(previousRndNumber);    

        if (results.length == 5) {
            console.log(results);
        }
    }, 0);
}


/* ========= 
    Execution 
    ========= */

//let randomNumber = a();
//console.log(randomNumber);        

//b( (result) => {console.log(result)} );
/*
c( (result) => {

    console.log("Total sum: " + result);        
});   
*/ 
