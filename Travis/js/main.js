// Make an object called clicker, which has a clickCount property, and a click method.
// Have the click method increment the clickCount by 1 each time it is called.

clicker = {
	clickCount: 0,
	click:()=>{ 
		this.clicker.clickCount++;
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


myInformation = {
	name: 'Travis',
	age: 35,
	hobby: 'beekeeper',
	statement:()=>{
		let futureAge = this.myInformation.age+10;
		return "My name is "+this.myInformation.name+", I will be "+ futureAge+" in 10 years" 
	},
	birthday:()=>{
		let ageIncrement = 1;
		this.myInformation.age = this.myInformation.age + ageIncrement;
		return "My name is "+this.myInformation.name+", I will be "+ this.myInformation.age+" on my birthday" 

	}
}

console.log(myInformation.statement())
console.log(myInformation.birthday())