//var sg = require('sget');

function player(inventory, startRoom) {
	this.inventory = inventory;
	this.currentRoom = startRoom;
	this.hitpoints = 100;
	this.strength = 5;
	this.speed = 10;
}
	player.prototype.viewInventory = function(){};
	player.prototype.addInventory = function(){};
	player.prototype.removeInventory = function(){};
	player.prototype.useInventory = function(){}; 

function inventoryItem (name, value, modifier, description) {
	this.itemName = name;
	this.itemValue = value;
	this.itemModifier = modifier;
	this.itemDescription = description;
}

function room() {
	this.roomName = " ";
	this.roomNumber = 0;
	this.roomDelimeter = "----------";
	this.roomDescription = " ";

	this.menuOption1 = " ";
	this.menuOption1_alt = " ";
	this.menuOption2 = " ";
	this.menuOption2_alt = " ";
	this.menuOption3 = " ";
	this.menuOption3_alt = " ";
	this.menuOption4 = " ";
	this.menuOption4_alt = " ";

	this.roomItem1 = " ";
	this.roomItem1_taken = false;
	this.roomItem2 = " ";
	this.roomItem2_taken = false;
	this.roomItem3 = " ";
	this.roomItem3_taken = false;
	this.roomItem4 = " ";
	this.roomItem4_taken = false;

}

function game() {
	this.Name = "Adventure";
}
	game.prototype.startGame = function() {
			console.log("The game is afoot!");
			game.prototype.exitGame();
	};

	game.prototype.exitGame = function(){
		process.exit(0);
	};
	game.prototype.printRoom = function() {};
	game.prototype.getChoice = function() {};

function exitGame() {
	process.exit(0);
}

function clearScreen() {
	process.stdout.write('\033c');
}

var adventureGame = new game();
adventureGame.startGame();