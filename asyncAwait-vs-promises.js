// using promises
// console.log('1')
function fct1(){
    console.log('2')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            document.getElementById("demo").innerHTML = data.userId
        })
    console.log('3')
}
// fct1()
// console.log('4')

// using async await
// console.log('1')
async function fct2(){
    console.log('2')
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log(data)
    document.getElementById("demo").innerHTML = data.userId
    console.log('3')
}
// fct2()
// console.log('4')

// What 'await' returns
/*
    We have " await fetch('https://jsonplaceholder.typicode.com/todos/1') " == the "res" inside the then() method in:
    " fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json()) "
    so when we put "await" before a promise ("fetch" returns a Promise) it will return the result of that promise that's gonna be catched
    inside the callback function of the then() method
*/

// the difference in execution between 'async await' and promises
/*
    in fct1() the result is : 1 / 2 / 3 / 4 / data
    in fct2() the result is : 1 / 2 / 4 / data / 3
    * in fct1() the work is prety stright forward, we have "1" then "2" then a promise (fetch) so this promise return will be put back by the event
      loop once the call stack is empty, so we continue with the stack execution and get "3" then "4", now stack is empty we get the promise result
      wich is the "data", the final result is 1 / 2 / 3 / 4 / data
    * in fct2() we have "1" then "2" then we have an "await", which means all the work inside this function that has the "async" keyword will be
      hold until the promise returns the result, so now the execution of the call stack continues by executing what's outside of the function,
      which is "4", now the call stack is empty, the event loop will load it with the result of the promise with is the "data", now the execution
      of the rest of the "async" function will resume and we get "3", so the final result is 1 / 2 / 4 / data / 3
*/

// Why 'async await' syntax is superior than promises
/*
    If we need "data" in our work in fct1(), for example to write it as an html, we must have the data to use it, so it must be returned,
    that's why we put the work inside the last then((data) =>{}) method
    So the problem with Promises is that the work with the result of the promise must be done inside the then() method, there is nowhere
    to get that "data" out of the promise, because a Promise can be resolved with the then() method only, and the then() method always returns
    another Promise, so if we need work to be done with the promise's data we put it inside the then() method
    But with "async await" syntax we can write our code in a synchronous syntax while all the asynchrronous work is been done on the 
    background.
*/

// The shortcomings of 'async await', and the use of 'Promise.all'
/*
    If we have multiple asyncronous tasks inside a function, like multiple fetch methods, the function's code execution will wait for each one
    of them to complete before moving to execute the next one, ex:
*/
async function ff(){
    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data1 = await res1.json()

    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data2 = await res2.json()

    const res3 = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    const data3 = await res3.json()

    console.log(data1)
    console.log(data2)
    console.log(data3)
}
ff()
/*
    but we don't want that, we want them to get executed all at once, because the API can handle multiple requests, he is not single threaded
    like Javascript, and this is where Promise.all comes into place.
    'Promise.all' allows us to groupe promises and let them run at the same time, so if it takes one second to return a fetch request, it will
    take three seconds to wait for them all, but with 'Promise.all' it will only take one second for all of them runing at the same time, ex:
*/
async function ff2(){
    const results = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/todos/2'),
        fetch('https://jsonplaceholder.typicode.com/todos/3')
    ])

    // const data = results.map(result => result.json())
    const data = await Promise.all(results.map(result => result.json()))

    console.log(data)
}