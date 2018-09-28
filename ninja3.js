class Ninja {
	constructor(name){
		this.name = name;
		this.health=100;
		this.speed = 3;
		this.strength = 3;
	}

	this.mySpeed = function() {
		return speed
	}

	this.myStrength = function() {
		return strength
	}

	this.myName = function() {
		console.log("My name is " + this.name)
		return this
	}

	this.myHealth = function() {
		console.log("My health is" + this.health)
		return this
	}

	// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

}

