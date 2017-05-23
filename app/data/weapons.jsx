import { Weapon } from "./weapon.jsx";
export var weaponsArray = [];
// Swords weapons
const Halberd = new Weapon(
	"Halberd",
	{ numDice: 2, diceSides: 23, flatBonus: 3 },
	25,
	"Swordsmanship"
);
const Axe = new Weapon(
	"Axe",
	{ numDice: 3, diceSides: 10, flatBonus: 3 },
	37,
	"Swordsmanship"
);
const Battle_Axe = new Weapon(
	"Battle Axe",
	{ numDice: 2, diceSides: 17, flatBonus: 4 },
	30,
	"Swordsmanship"
);
const Double_Axe = new Weapon(
	"Double Axe",
	{ numDice: 1, diceSides: 31, flatBonus: 4 },
	37,
	"Swordsmanship"
);
const Executioners_Axe = new Weapon(
	"Executioner's Axe",
	{ numDice: 3, diceSides: 10, flatBonus: 3 },
	37,
	"Swordsmanship"
);

// Fencing Weapons

// Macing weapons
const War_Axe = new Weapon(
	"War Axe",
	{ numDice: 6, diceSides: 4, flatBonus: 3 },
	40,
	"Macing"
);

// Archery weapons
