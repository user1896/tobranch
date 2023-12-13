//debugger
let value = 1+1

// using callbacks
function usingCallbacks(callbackCorrect, callbackError){
    if(value == 2){
        callbackCorrect('correct task')
    }else{
        callbackError('error task')
    }
}

usingCallbacks((message) => {
    console.log(message)
}, (error) => {
    console.log(error)
})

// using promises
function usingPromises(){
    return new Promise((resolve, reject) => {
        if(value == 2){
            resolve('correct task')
        }else{
            reject('error task')
        }
    })
}

let mycatch = usingPromises()
    .then((msg) => {
        console.log(msg)
        return 22 // this return will be catched by the next then()
    }, (error) => {
        console.log(error)
    }) // only the first then() method represents our example, the rest are for demostrating Promise chaining
    .then((msg2) => {
        console.log('second then')
        console.log(msg2) // display 22
        return 33 // this return will be catched by the next then()
    })
    .then((msg3) => {
        console.log('third then')
        console.log(msg3) // display 33
    })
    // we can handle a reject by a "catch()" method or by the send parameter of the "then()" method
    // .catch((error) => {
    //     console.log(error)
    // })

    console.log(mycatch)

/*
    When we declare a new promise object using the class "Promise", it takes a callback function as a "constructor", this callback 
    function has 2 parameters "resolve" and "reject", and everything in this constructor will be executed immediately.

    The Promise object supports two properties: state and result.
    A promise will always start in "state: 'pending'" (result: undefined), then if the promise is seccessful the state will be "fulfilled"
    (result is a value) and if any issue happend it's gonna be "rejected" (result is an error object).
    We cannot access the Promise properties "state" and "result", we must use a Promise method to handle promises.

    Once the promise is created we can use the "then" method to specify what will happen when the task completes (resolved, and the data
    sent with the function "resolve" will be put as an argument to the callback function of the method "then"), and we can use the
    "catch" method to determine what happens if an error occurred (rejected, and the data sent with the function "reject" will be put
    as an argument to the callback function of the method "catch", or it can be put as a second parameter of the callback fct of then()).
*/

// Promises are not just a syntactic sugar

let myPromise = new Promise((resolve) => {
    console.log(1)
    resolve('task message')
    console.log(2)
})

myPromise.then( msg => {
    console.log(msg)
} )
console.log(3)
// executed console.log(msg) as a response from the promise that has no asynchronous function, then we did console.log(2), result: 1-2-3-msg

/*
    We can see that Promises are not just a syntactic sugar that looks nice instead of using cllbacks, because that response that is used in
    the "resolve" or "reject" will be put into the "Web API" then the "Callback Queue" and it won't be executed until the "call stack" is empty.
    While if we use only callback functions that we define, they won't leave the "call stack" because they're just normal functions, so they get
    executed in the order they are called one on top of the other.

    We also notice that the only thing asynchronous about the promise is the response (resolve or reject), and this is way Promises are great
    to handle asynchronous tasks, because in the Promise's constructor when an async task gets added to the callback queue, we have the response
    get added as well, so it will be behind it in the queue.
*/