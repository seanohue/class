var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});

function mainMenu(inventory) {
	console.log("------------------------")
	console.log("You wake up in a stranger's bed with a stranger's arm draped across your chest.\nYou have no idea how you got there. What do you do? (Enter a number to select an option)");
	console.log("1 - Go to 'Cave'");
	console.log("2 - Go to 'Castle'");
	console.log("3 - View Inventory");
	console.log("4 - Quit");

	prompt.question("Please select a function (1-4): ", function(answer) {
			
			if (answer == 1) {					//works
				caveRoom(inventory);
			} else if (answer == 2) {
				castleRoom(inventory);
			} else if (answer == 3) {
				viewInventory(inventory, mainMenu);
			} else if (answer == 4) {
				exitProgram();
			} else {
				console.log("Bad input, please try again!");
				mainMenu(inventory);
			}
		});
}

function exitProgram() {
	console.log("Thank you! Goodbye!");
	process.exit(0);
}

function caveRoom(inventory) {
	console.log("------------------------");
	console.log("You've found a deep and bottomless cave. It's scary and damp. ");
	console.log("1 - Search around");
	console.log("2 - Fight an endless horde of goblins");
	console.log("3 - View Inventory");
	console.log("4 - Return to the Bedroom");

	prompt.question("Please select a function (1-4): ", function(answer) {
			
			if (answer == 1) {
				console.log("Searching in the darkness you find an invisible cloak. Somehow.");
				pickItem(inventory, "Invisible Cloak");   //You shouldn't be able to pick option 1 more than once
				caveRoom(inventory);
			} else if (answer == 2) {
				fight(inventory);
			} else if (answer == 3) {
				viewInventory(inventory, caveRoom);
			} else if (answer == 4) {
				mainMenu();
			} else {
				console.log("Bad input, please try again!");
				caveRoom(inventory);
			}
	});
}

function pickItem(inventory, item) {
	console.log(typeof inventory);
	inventory.push(item);
	return inventory;
}

function fight(inventory) {
	for (var i=0; i<inventory.length; i++) {
		if (inventory[i] == "Invisible Cloak") {
			caveRoom(inventory);
		} else {
			console.log("You didn't have the invisible cloak to dodge the attacks.\nYou're dead and you'll now be revived back in the bedroom");
			mainMenu(inventory);
		}
	}
}

function viewInventory(inventory, callback) {
	console.log("Here's everything in your inventory: ");
	for (var i=0; i<inventory.length; i++) {
		console.log(inventory[i]);
	}
	callback(inventory);
}

function castleRoom(inventory) {
	console.log("------------------------");
	console.log("Hopping out the window, you wind up at a castle down the road");
	console.log("In the Great hall you spot a 'Treasure Chest' and a hole in the wall.")
	console.log("1 - Look for Item in the 'Treasure Chest'");
	console.log("2 - Look for Item in the Hole");
	console.log("3 - View Inventory");
	console.log("4 - Return to the Bedroom");

	prompt.question("Please select a function (1-4): ", function(answer) {
			
			if (answer == 1) {					
				console.log("You just picked up a Golden Chalice and drank from the cup.\nYou're dead from poison and you'll now be revived back in the bedroom");
				inventory.push("Golden Chalice");
				mainMenu(inventory);
			} else if (answer == 2) {
				console.log("You've discovered a teleporter and you'll now be teleported to the Cave");
				inventory.push("Teleporter");
				caveRoom(inventory);
			} else if (answer == 3) {
				viewInventory(inventory, castleRoom);
			} else if (answer == 4) {
				mainMenu();
			} else {
				console.log("Bad input, please try again!");
				castleRoom(inventory);
			}
	});
}

process.stdout.write('\033c');
console.log("*************************");
console.log("!!SUPER ADVENTURE QUEST!!");
console.log("*************************");

mainMenu(["Flimsy Sword", "Juggling Balls", "Broken Compass"]);