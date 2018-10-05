    
let generateRnd = () => Math.floor(Math.random() * 10) + 1;   

let c = async function(param = 0, extra = 0) {

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

async function run() {

    let res1 = await c();
    let res2 = await c(res1, 2);        
    let res3 = await c(res2);
    let res4 = await c(res3);
    let res5 = await c(res4);

    console.log(res5);
};

run();    

/*
let promiseArray = [];        

for (var conta = 0; conta <= 4; conta ++) {
    promiseArray.push( c() );
}

let allResult = await Promise.all(promiseArray);
console.log(allResult);
*/

