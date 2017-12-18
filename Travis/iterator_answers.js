// .forEach is a basic iterator; all it does is step through each item in an array.

// Using the array words, log each word in words in upper case using .forEach.
const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"].forEach(logElements);

function logElements(value) {
    console.log(`${value}`);
}


// .map is like .forEach but it returns a new array with the selections and / or transformations applied in the iterator. .map saves to a new array and does not alter the original array.

// Map to a new array that stores only the first letter from each word in more_words.
const more_words = ["Joe", "Overeats", "Eggs"];
more_Letters = more_words.map((letters)=>{
	return letters.split('')
});


// .reduce iterates over the elements in an array and smooshes them together into a single variable according to the instructions in the iterator. Like .map, it returns a new value and does not alter the original array.

// Return the product of the numbers in arr.
const arr = [8, 8, 8, 8, 8, 8, 8, 8];


let sumedArr = arr.reduce((a,b)=>{
	return (a+b)
})


// Using iterators to find the total sheepCount of sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast:


const sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];

let totalSheep = sheepShearers.map((sheeps)=>{
	return sheeps.sheepCount;
}).reduce((a,b)=>{
 	return (a+b)
});

console.log(totalSheep)



















