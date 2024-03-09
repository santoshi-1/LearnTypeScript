type DogObj = {
    name: string,
    barks: boolean,
    color: string
}

type CatObj = {
    name: string,
    purrs: boolean,
    color: string
}

type HybridAnimal = DogObj & CatObj

//All fields which are common and unique are to be picked.
const hybridAnimal: HybridAnimal = {
    name: "Max",
    color: "White",
    barks: true,
    purrs: true
}
