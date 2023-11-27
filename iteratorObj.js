function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let dragonColors = ['red','blue','green','purple','yellow']
let dragonAbilities = ['frost','fire','arcane','dark Magic']

function makeDragon(){
    return {
        color: dragonColors[getRandomInt(5)],
        ability : dragonAbilities[getRandomInt(4)]
    }
}

// const dragonArmy = {
//     [Symbol.iterator]: () => {
//         return{
//             next: () => {
//                 enoughDragonSpawned = Math.random() > 0.75
//                 if( !enoughDragonSpawned ){
//                     return{
//                         value: makeDragon(),
//                         done: false
//                     }
//                 }
//                 else{
//                     return{done: true}
//                 }
//             }
//         }
//     }
// }

// 
const dragonArmy2 = {
    [Symbol.iterator]: function() { // the method must not be an arrow function because it has the "this" keyword
        return this
        // the [Symbol.iterator] method should return the iterator, and because we implemented the "next()" method
        // direcly in the object, we made him an iterator, so we return him ("this" keyword)
    },
    next: () => { // by implementing the "next()" method outside the @@iterator we can call it directly if we want
        enoughDragonSpawned = Math.random() > 0.75
        if( !enoughDragonSpawned ){
            return{
                value: makeDragon(),
                done: false
            }
        }
        else{
            return{done: true}
        }
    }
}

for(const dragon of dragonArmy2){
    console.log(dragon)
}