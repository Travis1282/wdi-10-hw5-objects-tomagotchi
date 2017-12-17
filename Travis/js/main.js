// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.

let clicker = {
	clickCount: 0,
	click:()=>{ 
		this.clickCount++;
	}
}
clicker.click();
console.log(clicker.clickCount)

// Create an object called myInformation.
// Assign to it your name, your current age, and a fact about you.
// Inside myInformation, create a method called statement that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// Inside myInformation, create another function that can be used to increment the value of your age by 1 each time that you call it.
// It's your birthday! Call this new method that you made that will increase your age.
// Create another function that can be used to change the value of your name.
// You're feeling funky and decide that your new name is Rumpelstiltskin. Call the method that will update your name and assign this new name. Log your object to confirm the changes.


let myInformation = {
	name: 'Travis',
	age: 35,
	hobby: 'beekeeper',
	statement:()=>{
		let futureAge = this.age+10;
		return "My name is "+this.name+", I will be "+ futureAge+" in 10 years" 
	},
	birthday:()=>{
		let ageIncrement = 1;
		this.age = this.age + ageIncrement;
		return "My name is "+this.name+", I will be "+ this.age+" on my birthday" 
	}
}

console.log(myInformation.statement())
console.log(myInformation.birthday())





// Create an object called greeter.
// Inside the greeter object, create a method called hello that takes a name as a parameter and returns a greeting message followed by the name parameter.
// Example: Oh hello there, Matthew

// Create another method inside greeter called goodbye that takes a name as a parameter and returns a farewell greeting followed by the name parameter.
// Example: Arrivederci, Matthew!

// Create a final method inside greeter called whoAreYou that takes a name as a parameter and returns "Oh right! ", followed by the name parameter, followed by " how could I forget...!"
// Example: Oh right! Matthew how could i forget...!

// Play around executing your functions by accessing them through the object.



let greeter = {
	hello:(name)=>{
		return "Oh hello there, "+name;
	},
	goodbye:(name)=>{
		return "Arrivederci, "+name;
	},
	whoAreYou:(name)=>{
		return "Oh right! "+name+" how could i forget...!";
	}
}

console.log(greeter.hello("Travis"));
console.log(greeter.goodbye("Travis"));
console.log(greeter.whoAreYou("Travis"));



// Make an object called stringCollector, which has:

// a collection property - an array to hold strings
// a collect method which takes a string as a parameter
// the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// add an admireCollection method which prints out each string in the collection to the console, one line at a time



let stringCollector = {
	collection: ['0'],
	collect:function(str){
		this.collection[0] = str.split('').reverse().join('');
	},
	admireCollection:function(){
		let arrayAgain = this.collection[0].split('')
		for(i in arrayAgain) 
			console.log(arrayAgain[i])
	}
}
stringCollector.collect('123456789');
stringCollector.admireCollection();

console.log(stringCollector.collection[0])
















