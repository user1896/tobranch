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

const dragonArmy = {
    [Symbol.iterator]: () => {
        return{
            next: () => {
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
    }
}

for(const dragon of dragonArmy){
    console.log(dragon)
}