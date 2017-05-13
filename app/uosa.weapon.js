var Weapon = function() {
	this.name = "";
	this.skill = "Swordsmanship"; // Swordsmanship | Macing | Fencing | Archery
	this.hands = 1;
	this.durability: 0;
	this.isMagic: true;
	this.magicAttributes: {
		"durabilityPrefix": {
			name: "",
			value: 0
		},
		"silver": false,
		"tacticsPrefix": {
			name: "",
			value: 0
		},
		"damageSuffix": {
			name: "",
			value: 0,
		},
		"spellCharged": {
			name: "",
			numCharges: 0
		};
	};
	this.isCrafted: false;
	this.craftedAttributes: {
		exceptional: false,
		makersMark: "",
	};
	this.displayName = function() {
		if (this.magic.isMagic) {
			name = "an " + durabilityPrefix.name + " " + (silver ? "Silver " : "") + tacticsPrefix.name + " " + name + " of " + damageSuffix.name + " and " + spellCharged.name + " [" + spellCharged.numCharges + "]";
		} else if (this.crafted.isCrafted) {
			if (this.crafted.exceptional) {
				name += "an exceptionaly crafted " + this.name + " made by " + this.crafted.makersMark;
			} else {
				name += "a " + this.name;
			}
		} else {
			name += "a " + this.name;
		}
	}
}

Weapon.Prototype.baseWeaponDamageCalc = function(numDice, numSides, bonus) {
	this.minWepDamage = numDice + bonus;
	this.maxWepDamage = (numDice * numSides) + bonus;
	this.medianDamage = function(minWepDamage, maxWepDamage) {
		var sampleHits = [];
		var totalDamage = 0;
		const numHits = 1000
		for (var i = 0; i <= numHits; i++) {
			min = Math.ceil(min);
			max = Math.floor(max);
			sampleHits.push(Math.floor(Math.random() * (max - min + 1)) + min);
			totalDamage += hits[i];
		}
		return totalDamage / numHits
	}
	var baseWeaponDamage = {
		min: this.minWepDamage,
		max: this.maxWepDamage,
		median: this.medianDamage(this.min, this.max),
	}
	return baseWeaponDamage
}

Weapon.Prototype.tacticsBonusCalc = function(tacticsSkill, magicPrefix) {
	var magicPrefixBonus = 0
	switch (magicPrefix) {
		case "accurate":
			magicPrefixBonus = 5;
			break;
		case "eminently":
			magicPrefixBonus = 10;
			break;
		case "surpassingly":
			magicPrefixBonus = 15;
			break;
		case "exceedingly":
			magicPrefixBonus = 20;
			break;
		case "supremely":
			magicPrefixBonus = 25;
			break;
	};
	var tbonus = tacticsSkill + magicPrefixBonus + 50;
	return tbonus
}

Weapon.Prototype.magicSuffixBonusCalc = function(magicSuffix) {
	switch (magicSuffix) {
		case "ruin":
			magicSuffixBonus = 1;
			break;
		case "might":
			magicSuffixBonus = 3;
			break;
		case "gm":
			magicSuffixBonus = 4;
			break;
		case "force":
			magicSuffixBonus = 5;
			break;
		case "power":
			magicSuffixBonus = 7;
			break;
		case "vanquishing":
			magicSuffixBonus = 9;
			break;
		default:
			magicSuffixBonus = 0;
	};
	return magicSuffixBonus
}

Weapon.Prototype.strengthBonusCalc = function(str) {
	var sBonus = str / 5;
	return sBonus
}
Weapon.Prototype.anatomyBonusCalc = function(anatomySkill) {
	var abonus = anatomySkill / 5;
	return abonus
}
Weapon.Prototype.finalDamageCalc = function(weapon) {
	var minDamage = ((minWepDamage + magicSuffixBonus) * (tBonus + sBonus + aBonus)) / 2;
	var maxDamage = ((maxWepDamage + magicSuffixBonus) * (tBonus + sBonus + aBonus)) / 2;
}
