require("./css/main.less");
("use strict");
import React from "react";
import { render } from "react-dom";
import WeaponList from "./components/weaponlist.jsx";
import CombatSkill from "./components/combatSkills.jsx";
import WeaponStats from "./components/weaponStats.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCombatSkill: 0,
			selectedWeapon: undefined
		};
		this.selectCombatSkill = this.selectCombatSkill.bind(this);
		this.selectWeaponHandler = this.selectWeaponHandler.bind(this);
	}
	selectCombatSkill(combatSkill) {
		this.setState({ selectedCombatSkill: combatSkill });
	}
	selectWeaponHandler(value) {
		this.setState({ selectedWeapon: value });
	}
	render() {
		return (
			<div>
				<header>
					<h1>UOSA Weapon Tool</h1>
				</header>
				<div className="weapon-panel">
					<CombatSkill selectCombatSkill={this.selectCombatSkill} />
					<br />
					{this.state.selectedCombatSkill != 0
						? <WeaponList
								key={this.state.selectedCombatSkill}
								selectedCombatSkill={
									this.state.selectedCombatSkill
								}
								selectWeaponHandler={this.selectWeaponHandler}
							/>
						: ""}
					{this.state.selectedWeapon != undefined
						? <WeaponStats
								key={this.state.selectedWeapon}
								selectedWeapon={this.state.selectedWeapon}
							/>
						: ""}
				</div>
				<div className="character-panel">
					<h3>Choose Your Stats</h3>
				</div>
				<div className="output-panel" />
			</div>
		);
	}
}
render(<App />, document.getElementById("app"));
