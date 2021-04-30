const Singleton = require("./Singleton");

function main() {
	var instanceOne = Singleton.getInstance();
	instanceOne.username = "Jack";

	var instanceTwo = Singleton.getInstance();
	console.log("Second Instance: ", instanceTwo.username);
	// Output - Second Instance:  Jack

	console.log("Are both instance equal? ", instanceOne === instanceTwo);
	// Output - Are both instance equal?  true
}

main();
