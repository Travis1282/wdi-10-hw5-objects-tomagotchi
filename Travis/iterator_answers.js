// .forEach is a basic iterator; all it does is step through each item in an array.

// Using the array words, log each word in words in upper case using .forEach.
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"].forEach(logElements);

function logElements(value) {
    console.log(`${value}`);
}


// .map is like .forEach but it returns a new array with the selections and / or transformations applied in the iterator. .map saves to a new array and does not alter the original array.

// Map to a new array that stores only the first letter from each word in more_words.
const more_words = ["Joe", "Overeats", "Eggs"];
// Expected result:

// ["J", "O", "E"]



more_Letters = more_words.map((letters)=>{
	return letters.split('')
});


// let numBlers =[2,4,5,6,9,10]

// const Odds = numBlers.filter((num)=>{
// 	return num % 2==1
// }).map((num)=>{
// 	return 2 * 10;
// })

















