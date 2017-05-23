import React from "react";
class weaponStats extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let selectedWeapon = this.props.selectedWeapon;
		let weaponStats = {};
		console.log(this.props.weaponsArray);
		this.props.weaponsArray.reduce(function(prev, current) {
			console.log("selectedWeapon:" + selectedWeapon);
			console.log(current);
			return current.name == selectedWeapon ? weaponStats = current : "";
		},0);
		return (
			<aside className="weapon-stats">
				Name: <strong>{weaponStats.name}</strong><br />
				Skill: <strong>{weaponStats.skill}</strong><br />
				Damage: <strong>{weaponStats.damage.numDice}d{weaponStats.damage.diceSides}+{weaponStats.damage.flatBonus}</strong>
				<br />
				Min Damage: <strong>{weaponStats.baseWeaponDamageCalc().minDamage}</strong>
				<br />
				Max Damage: <strong>{weaponStats.baseWeaponDamageCalc().maxDamage}</strong>
				<br />
				Avg Damage: <strong>{weaponStats.baseWeaponDamageCalc().averageDamage}</strong>
				<br />
				Speed: <strong>{weaponStats.speed}</strong>
				<br />
			</aside>
		);
	}
}

export default weaponStats;
