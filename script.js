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