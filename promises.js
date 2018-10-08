
    
let generateRnd = () => Math.floor(Math.random() * 10) + 1;

/**
 * Declaring a Promise (automatically executed)
 */
/*
let getRndNumber = new Promise(function(resolve, reject) {

    // generate random number after 1 second
    setTimeout(function() {

        let result = generateRnd(); 
        console.log("result:" + result);

        // callback execution
        resolve(result);  

    }, 1000);
});    
*/

/**
 * Wrapping a Promise in a function
 */
let getRndNumber = function(param = 0, extra = 0) {

    return new Promise(function(resolve, reject) {

        // generate random number after 1 second
        setTimeout(function() {

            let result = generateRnd(); 
            console.log("result:" + result);

            //if (result > 0) reject("Value is greater than 5!");

            // callback execution
            resolve(param + result + extra);  

        }, 1000);
    });
}

/* ========= 
    Execution 
    ========= */   
getRndNumber().       
    then( 
        (result) => {
            return getRndNumber(result, 2)
        },
        (error) => {
            console.log("Warning! " + error);
        }).    
    then(getRndNumber).
    then(getRndNumber).
    then((result)=> {
            console.log("Final result:" + result);                      
        }
    ).catch( (ex) => {
        console.log("error: " + ex);
    });


/*
let promiseArray = [];

for (var conta = 0; conta <= 4; conta ++) {
    promiseArray.push( getRndNumber() );
}

Promise.all(promiseArray).then( (result)=> {
    console.log(result);
}); 
*/     
    