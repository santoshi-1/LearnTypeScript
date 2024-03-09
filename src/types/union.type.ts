type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type Cat = {
    name: string,
    purrs: boolean
}


type DogCatUnion = Dog | Cat;

let dog: DogCatUnion = {
    name: "Rio",
    barks: false,
    wags: false
}

let cat: DogCatUnion = {
    name: "Bella",
    purrs: true
}


/**
 * The union should contain all the properties from either of the objects. or else it throws error.
 * If bargs or purrs is uncommented, the comment will be resolved.
 */

let dogAndCat: DogCatUnion = {
    name: "Hybrid",
    // barks: false,
    wags: true,
    // purrs: false
}


console.log(dog)
console.log(cat)
console.log(dogAndCat)