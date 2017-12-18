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
  	console.log("Waaaaaa!!!")
  }
}

tamagotchi1.cry()