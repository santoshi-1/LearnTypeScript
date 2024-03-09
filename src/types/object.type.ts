/**
 *  ?: is used when we want to make a key in the object optional. 
 *  If ? is not mentioned and image is not provided a value, it will throw error.
 */

let article: {
    author: string,
    content: string,
    title: string,
    image?: string 
}

article = {
    author: "Santoshi",
    content: "Algorithms",
    title: "Algorithms"
}