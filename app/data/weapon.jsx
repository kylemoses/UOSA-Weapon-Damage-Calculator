import { weaponsArray } from "./weapons.jsx";
export class Weapon {
	constructor(name, damage, speed, skill) {
		this.name = name;
		this.damage = damage;
		this.speed = speed;
		this.skill = skill;
		this.baseWeaponDamageCalc = this.baseWeaponDamageCalc.bind(this);
		weaponsArray.push(this);
	}
	baseWeaponDamageCalc() {
		var minWepDamage = this.damage.numDice + this.damage.flatBonus;
		var maxWepDamage =
			this.damage.numDice * this.damage.diceSides + this.damage.flatBonus;
		function averageDamage(minWepDamage, maxWepDamage) {
			let sampleHits = [];
			let totalDamage = 0;
			const numHits = 1000;
			for (var i = 0; i <= numHits; i++) {
				let min = Math.ceil(minWepDamage);
				let max = Math.floor(maxWepDamage);
				sampleHits.push(
					Math.floor(Math.random() * (max - min + 1)) + min
				);
				totalDamage += sampleHits[i];
			}
			return totalDamage / numHits;
		}
		let baseWeaponDamage = {
			minDamage: minWepDamage,
			maxDamage: maxWepDamage,
			averageDamage: averageDamage(minWepDamage, maxWepDamage)
		};
		return baseWeaponDamage;
	}
}
class CraftedWeapon extends Weapon {
	constructor(
		name,
		numDice,
		diceSides,
		damageBonus,
		speed,
		skill,
		exceptional,
		mark
	) {
		super(name, numDice, diceSides, damageBonus, speed, skill);
	}
}
class MagicWeapon extends Weapon {
	constructor(
		name,
		numDice,
		diceSides,
		damageBonus,
		speed,
		skill,
		magicAttributes
	) {
		super(name, numDice, diceSides, damageBonus, speed, skill);
	}
}
