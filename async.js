    
let generateRnd = () => Math.floor(Math.random() * 10) + 1;   

let c = async function(param = 0, extra = 0) {

    return new Promise(function(resolve, reject) {

        // generate random number after 1 second
        setTimeout(function() {

            let result = generateRnd(); 
            console.log("result:" + result);

            //if (result > 5) reject("Value is greater than 5!");

            // callback execution
            resolve(param + result + extra);  

        }, 1000);
    });
}

/* ========== 
    Execution 
    ========= */   
/*

/**
 * Using async await
 * =================
 */
/*
async function run() {

    try {
        let res1 = await c();
        let res2 = await c(res1, 2);        
        let res3 = await c(res2);
        let res4 = await c(res3);
        let res5 = await c(res4);
    
        console.log(res5);
    }
    catch (ex) {
        console.log("error: " + ex);
    }
};

run();    
*/


/**
 * Using Promise.all 
 * =================
 */
/*
async function awaitPromiseAll() {

    let promiseArray = [];        

    for (var conta = 0; conta <= 4; conta ++) {
        promiseArray.push( c() );
    }
    
    let allResult = await Promise.all(promiseArray);
    console.log(allResult);    

    //Promise.all(promiseArray).then(allResult=> {
    //    console.log(allResult);        
    //});    
} 

awaitPromiseAll();
*/


/**
 * Using async-await in "for" loops
 * ================================
 */
/*
let myArray = [1,2,3];

async function loop() {
    
    for (let conta = 0; conta < myArray.length; conta ++) {

        console.log("Execution #" + myArray[conta]);
        let result = await c();        
    }
};

loop();
*/


/**
 * Using async-await in "for-each" loops
 * =====================================
 */

/*
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Polyfill
let myArray = [1,2,3];

myArray.forEach(async element=> {

    console.log("Execution #" + element);
    let result = await c();     
});

  
    //Equivalent call.  
    //let res1 = c.call(); //we are not using "await" neither "then"
    //console.log(res1);
    //let res2 = c.call();
    //console.log(res2);
    //let res3 = c.call();
    //console.log(res3);
*/    


/**
 * Using async-await in "for-of" loops
 * ===================================
 */
/*
async function loopForOf() {

    let myArray = [1,2,3];

    for (let element of myArray) {
        console.log("Execution #" + element);
        let result = await c();     
    }    
}

loopForOf();
*/
