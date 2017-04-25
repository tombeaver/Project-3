//Arrays - Creates List of possible Monsters and Suffixes
var monsterList = ['Ogre', 'Troll', 'Demigod', 'Shark', 'Cyclops', 'Toothless', 'Clown', 'Villian', 'Human'];
var suffixList = ['Wonderful', 'Excellent', 'Boastful', 'Terrible', 'Helpful', 'Blissful', 'Destroyer'];

//Health and Hit Points
var monsterTotal = 100;
var monsterHP = 100;
var totalHitPoints = 500;
var playerHitPoints = 500;

//Levels
var levels = 1;

//Start - By clicking "Start" it launches program and initiates game
function start() {
	// Randomizes monsters and suffix
	var monster = monsterList[Math.floor(Math.random()*monsterList.length)];
	var suffix = suffixList[Math.floor(Math.random()*suffixList.length)]
	// Gather's players name and adds suffix
	var playerName = prompt('What\'s Your Character\'s Name');    	
    	document.querySelector('.playerName').innerHTML = (playerName) + ' the ' + suffix;
    	// Hides Start Button
    	document.querySelector('.start').style.display = "none";
    	// Unhides Attack and Heal
    	document.querySelector('.attack').style.display = "block";
    	document.querySelector('.heal').style.display = "block";
    	// Displays Level
    	document.querySelector('.playerContent').innerHTML = 'Level ' + levels + '<br>'
    	// Displays Monster in Content Field
    	document.querySelector('.monsterContent').innerHTML = monster + ' appears!<br>';
    	document.querySelector('.monsterName').innerHTML = (monster);
	}
//Attack - Clicking "Attack" will attack monster but will result in monster attacking you
function attack() {
	// Randomizes damage dealt by user and damage dealt by monster
	var playerDamage = Math.floor(Math.random() * 30 + 1);
	var damage = Math.floor(Math.random() * 30 + 1);
	// Displays what monster is and HitPoints
	var monster = monsterList[Math.floor(Math.random()*monsterList.length)];

// Says what happens when your HP gets to 0
if (playerHitPoints <= 0) {
	alert ('You dead...');
	location.reload();
	}	else {
		// If your damage is greater than monsters HP
		if (damage >= monsterHP) {
			alert('Congrats! You defeated the monster!');
				document.querySelector('.playerContent').innerHTML += '<br>You caused ' + damage + ' points in damage!';
				document.querySelector('.playerContent').innerHTML += '<br>You defeated the monster!';
				document.querySelector('.monsterContent').innerHTML = monster + ' appears!<br>';
				document.querySelector('.monsterName').innerHTML = (monster);
				// Resets monsters HP
				monsterHP = 100;
				// Creates conditional for level ceiling
				if (levels < 10) {
				levels ++;
				document.querySelector('.levels').innerHTML = 'Level ' + levels;
				document.querySelector('.playerContent').innerHTML = 'Level ' + levels + '<br>';
				}	else {
					alert ('You defeated all the monsters in the Dungeon!')
					location.reload();
				}
		}	else {
				document.querySelector('.playerContent').innerHTML += '<br>You caused ' + damage + ' points in damage!';
				document.querySelector('.monsterContent').innerHTML += '<br>It attacked back and caused ' + playerDamage + ' points in damage!';					
				// Effect damage does to HP
				monsterHP = monsterHP - damage;
				playerHitPoints = playerHitPoints - playerDamage;
			}				
			document.querySelector('.playerLife').innerHTML = ' <section id="hp"><section id="health">' + (playerHitPoints) + ' / ' + (totalHitPoints) + '</section></section>';
		    document.querySelector('.monsterLife').innerHTML = ' <section id="monsterHP"><section id="monsterHealth">' + (monsterHP) + ' / ' + (monsterTotal) + '</section></section>';
		}
	}
//Heal - Clicking "Heal" causes you to heal yourself, but you lose a turn and the monster still attacks you
function heal() {
	// Randomizes how much healing
	var heal = Math.floor(Math.random() * 300 + 1);
	var playerDamage = Math.floor(Math.random() * 30 + 1);

// If heal amount is greater than the difference between current HP and Total, heal cannot be performed	
if (heal >= totalHitPoints - playerHitPoints) {
	document.querySelector('.playerContent').innerHTML += '<br>Cannont heal at this time.';
	document.querySelector('.monsterContent').innerHTML += '<br>It attacked back and caused ' + playerDamage + ' points in damage!';
	playerHitPoints = playerHitPoints - playerDamage;
		}	else {
			document.querySelector('.playerContent').innerHTML += '<br>You healed yourself ' + heal + ' amount of HP';
			playerHitPoints = playerHitPoints + heal;
			document.querySelector('.playerLife').innerHTML = ' <section id="hp"><section id="health">' + (playerHitPoints) + ' / ' + (totalHitPoints) + '</section></section>';
			document.querySelector('.monsterContent').innerHTML += '<br>It attacked back and caused ' + playerDamage + ' points in damage!';	
			playerHitPoints = playerHitPoints + heal;
			playerHitPoints = playerHitPoints - playerDamage;
		}	
			document.querySelector('.playerLife').innerHTML = ' <section id="hp"><section id="health">' + (playerHitPoints) + ' / ' + (totalHitPoints) + '</section></section>';
	}



