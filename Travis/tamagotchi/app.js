// Start by making a Tamagotchi, just a regular object with properties. Give it the following keys and you can assign whatever values you would like to make it your own: name, creatureType, foodInTummy, restedness, health.
// Example

// Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain functions as values. When a function is stored within an object, it's called a method.

// Let's add a method of cry to our Tamagotchi that will log "Waaaaaa!!!" anytime the cry method is called.

// Invoke the cry method to test that it works.



let tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function(){
  	this.foodInTummy--
  	console.log("I'm "+this.name+" Waaaaaa!!!. I only have "+this.foodInTummy+" left in my stomach")
  },
  puke: function(){
  	this.health--
  	console.log(this.name+" feel great! Bleeeeh :O~~. New health: "+this.health)
  }, 
  yawn: function(){
  	this.restedness--
  	console.log(this.name+"Yaaaawwwwn"+" Restedness: "+this.restedness)
  }
}

tamagotchi1.cry()

// Write a method puke into your Tamagotchi object that console.logs the Tamagotchi having a sick-up (example: Bleeeeh :O~~)

// Invoke the puke method to confirm that it works.

tamagotchi1.puke()

// Write a method yawn into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: Yaaaawwwwn!).

// Invoke the yawn method.

tamagotchi1.yawn()





let tamagotchi2 = {
  name: "booRadily",
  creatureType: "caucasian",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function(){
  	this.foodInTummy--
  	console.log("I'm "+this.name+" Waaaaaa!!!. I only have "+this.foodInTummy+" left in my stomach")
  },
  puke: function(){
  	this.health--
  	console.log(this.name+" feel great! Bleeeeh :O~~. New health: "+this.health)
  }, 
  yawn: function(){
  	this.restedness--
  	console.log(this.name+"Yaaaawwwwn"+" Restedness: "+this.restedness)
  }
}


tamagotchi2.cry()
tamagotchi2.puke()
tamagotchi2.yawn()


// Let's make another object, a player. The player should have a key of name and you can provide the value.

// Let's give your player an action sayName that will log the sentence: "Hi my name is: " with your player's name at the end.

let player = {
	name: "player",
	sayName: function(){
		console.log("Hi my name is: "this.name)
	}
}














