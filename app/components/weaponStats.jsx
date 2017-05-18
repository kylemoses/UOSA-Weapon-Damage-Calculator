import React from "react";
import { weapons } from "../data/weapon.jsx";
class weaponStats extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let selectedWeapon = this.props.selectedWeapon;
		let weaponStats = weapons.reduce(function(total, current) {
			console.log("selectedWeapon:" + selectedWeapon);
			console.log(current.name);
			return current.name == selectedWeapon ? current : "";
		});
		return (
			<aside className="weapon-stats">
				{"Name: " + weaponStats.name}<br />
				{"Class: " + weaponStats.skill}<br />
				{"Damage: " +
					weaponStats.damage.numDice +
					"d" +
					weaponStats.damage.diceSides +
					"+" +
					weaponStats.damage.flatBonus}
				<br />
				{"Min Damage: " + weaponStats.baseWeaponDamageCalc().minDamage}
				<br />
				{"Max Damage: " + weaponStats.baseWeaponDamageCalc().maxDamage}
				<br />
				{"Avg Damage: " +
					weaponStats.baseWeaponDamageCalc().averageDamage}
				<br />
				{"Speed: " + weaponStats.speed}<br />
			</aside>
		);
	}
}

export default weaponStats;
