import React from "react";
import { weapons } from "../data/weapons.jsx";
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
				{"Name: " + weaponStats.name + ":"}<br />
				{"Damage: " +
					weaponStats.damage.numDice +
					"d" +
					weaponStats.damage.numSides +
					" +" +
					weaponStats.damage.bonus}
				<br />
				{"Speed: " + weaponStats.speed}<br />
			</aside>
		);
	}
}

export default weaponStats;
