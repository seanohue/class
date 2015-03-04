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

function roomItem(name, taken) {
	this.itemName = name;
	this.itemTaken = false;
	this.roomID = 0;
}

function menuItem() {
	this.menuID = 0;
	this.stdDescription = " ";
	this.altDescription = " ";
	this.roomID = 0;		//Not sure if this will be used
}

function room() {
	this.roomID = 0;
	this.roomName = " ";
	this.roomDescription = " ";
	this.numberMenuOptions = 4;
	this.numberItems = 2;
	this.roomDelimeter = "----------";

	this.menuOption = [1];
	this.roomItem = [1];
	
	

	
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