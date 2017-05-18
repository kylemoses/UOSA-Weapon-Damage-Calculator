import { Weapon } from "./weapon.jsx";
export var weaponsArray = [];
// Swords weapons
const halberd = new Weapon(
	"Halberd",
	{ numDice: 3, diceSides: 23, bonus: 3 },
	25,
	"Swordsmanship"
);
const axe = new Weapon(
	"Axe",
	{ numDice: 3, diceSides: 10, bonus: 3 },
	37,
	"Swordsmanship"
);

// Fencing Weapons

// Macing weapons
const war_axe = new Weapon(
	"War Axe",
	{ numDice: 6, diceSides: 4, flatBonus: 3 },
	40,
	"Macing"
);

// Archery weapons
export default weapons;
