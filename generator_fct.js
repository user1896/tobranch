// Simple Generator function
function* generatorfct(){
    console.log('Before 1')
    yield 1
    console.log('After 1')
    console.log('Before 2')
    yield 2
    console.log('After 2')
    console.log('Before 3')
    yield 3
    console.log('After 3')
}

// create an iterable object that iterates over our function
const generatorObj = generatorfct()

console.log(generatorObj.next()) /* value: 1 / done: false*/
console.log(generatorObj.next()) /* value: 2 / done: false*/
console.log(generatorObj.next()) /* value: 3 / done: false*/
console.log(generatorObj.next()) /* value: undefined / done: true*/

////////////////////////////////////////////////
// send an argument with the next method ".next(arg)"
////////////////////////////////////////////////
console.log("generatorfct2")

function* generatorfct2(){
    v = 0
    v = yield v + 1
    v = yield v + 2
}
const generatorObj2 = generatorfct2()

console.log(generatorObj2.next())
console.log(generatorObj2.next(22))
/*
    ".next()" will execute the code till "yield v + 1" so "value = 0 + 1 == 1"
    "yield v + 1" will pause the execution of the function instance, so "v = yield v + 1" will not be executed
    Then "next(22)" will replace the whole of the "yield" command, so "yield v + 1" will be replaced by 22.
    Now "v == 22", so "v = yield v + 2" will pause the code before assigning a value to "v" and "yield v + 2"
    will return "22 + 2 == 24"
*/