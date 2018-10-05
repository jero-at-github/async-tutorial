
    
let generateRnd = () => Math.floor(Math.random() * 10) + 1;

/*
let b = new Promise(function(resolve, reject) {

    // generate random number after 1 second
    setTimeout(function() {

        let result = generateRnd(); 
        console.log("result:" + result);

        // callback execution
        resolve(result);  

    }, 1000);
});    
*/

let c = function(param = 0, extra = 0) {

    return new Promise(function(resolve, reject) {

        // generate random number after 1 second
        setTimeout(function() {

            let result = generateRnd(); 
            console.log("result:" + result);

            // callback execution
            resolve(param + result + extra);  

        }, 1000);
    });
}

/* ========= 
    Execution 
    ========= */   
c().
    then(c).
    then( (result) => {
        return c(result, 2)
    }).
    then(c).
    then(c).
    then((result)=> {
            console.log("Final result:" + result);                      
        }
    );


/*
let promiseArray = [];

for (var conta = 0; conta <= 4; conta ++) {
    promiseArray.push( c() );
}

Promise.all(promiseArray).then( (result)=> {
    console.log(result);
}); 
*/     
    