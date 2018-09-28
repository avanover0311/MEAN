function Ninja(name) {
	var speed = 3;
	var strength = 3;
	var self = this;
	this.name = name;
	this.health = 100;

	this.myStats = function() {
		console.log("Name " + this.name+ " Speed "+ this.mySpeed() + " Strength " + this.myStrength()+ " Health " + this.health)

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

	this.mySake = function() {
		this.myHealth += 10;
		console.log("my health has increased to " + this.health)
		return this
	}
	this.myPunch = function(opponent) {
		if(opponent != this) {
			opponent.health = this.health;
			this.myPunch -= 5
		}
		return this
	}
	this.myKick = function(meanopponent) {
		if(meanopponent != this)
			meanopponent.health =this.health
			this.health -= 15
		}
		return this
	}
var stephen = new Ninja("stephen")
var aleisa = new Ninja("aleisa")

stephen.myKick(aleisa)
aleisa.myPunch(stephen)

// stephen.myName();
// stephen.myStats();
// stephen.mySake();

 
  

