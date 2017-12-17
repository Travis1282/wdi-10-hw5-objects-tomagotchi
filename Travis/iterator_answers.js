// .forEach is a basic iterator; all it does is step through each item in an array.

// Using the array words, log each word in words in upper case using .forEach.
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"].forEach(logElements);


function logElements(value) {
    console.log(`${value}`);
}
// new Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logElements);