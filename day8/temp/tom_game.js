//var sg = require('sget');

function game() {
	this.Name = "Adventure";
}
	game.prototype.startGame = function() {
		console.log("The game is afoot!");
		var dungeon = new dungeon();
		
		console.log(room1.menuItem[0].stdDescription);
		room1.menuItem.push(new menuOption(1, "blah", "hlab", 0));
		console.log(room1.menuItem[1].stdDescription);
		
		game.prototype.exitGame();
	};

	game.prototype.exitGame = function(){
		process.exit(0);
	};
	game.prototype.printRoom = function() {};
	game.prototype.getChoice = function() {};
	game.prototype.exitGame = function() {
		process.exit(0);
	};

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

function menuOption(id, desc, altDesc, roomID) {
	this.menuID = id;
	this.stdDescription = desc;
	this.altDescription = altDesc;
	this.roomID = roomID;				//Not sure if this will be used
}

function dungeon() {
	this.rooms = [new room()];
}
	dungeon.prototype.populateDungeon = function () {

	};

function room() {
	this.roomID = 0;
	this.roomName = " ";
	this.roomDescription = " ";
	this.numberMenuOptions = 4;
	this.numberItems = 2;
	this.roomDelimeter = "----------";

	this.menuItem = [new menuOption(0, "test", "tset", 1)];
	this.roomItem = [new roomItem("ball", false)];	
}

function clearScreen() {
	process.stdout.write('\033c');
}

/* --------------- CODE TO ACTUALLY RUN THE GAME -------------- */
var adventureGame = new game();
clearScreen();
adventureGame.startGame();
