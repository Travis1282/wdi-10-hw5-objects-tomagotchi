// Start by making a Tamagotchi, just a regular object with properties. Give it the following keys and you can assign whatever values you would like to make it your own: name, creatureType, foodInTummy, restedness, health.
// Example

// Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain functions as values. When a function is stored within an object, it's called a method.

// Let's add a method of cry to our Tamagotchi that will log "Waaaaaa!!!" anytime the cry method is called.

// Invoke the cry method to test that it works.



var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function(){
  	console.log("I'm "+this.name+" Waaaaaa!!!")
  	this.foodInTummy--
  },
  puke: function(){
  	console.log(this.name+" feel great! Bleeeeh :O~~")
  }, 
  yawn: function(){
  	console.log("Yaaaawwwwn")
  }
}

tamagotchi1.cry()

// Write a method puke into your Tamagotchi object that console.logs the Tamagotchi having a sick-up (example: Bleeeeh :O~~)

// Invoke the puke method to confirm that it works.

tamagotchi1.puke()

// Write a method yawn into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired (example: Yaaaawwwwn!).

// Invoke the yawn method.

tamagotchi1.yawn()











