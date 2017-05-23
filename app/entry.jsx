require("./css/main.less");
("use strict");
import React from "react";
import { render } from "react-dom";
import { weaponsArray } from "./data/weapons.jsx";
import WeaponList from "./components/weaponlist.jsx";
import CombatSkill from "./components/combatSkills.jsx";
import WeaponStats from "./components/weaponStats.jsx";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCombatSkill: undefined,
			selectedWeapon: undefined,
		};
		this.selectCombatSkill = this.selectCombatSkill.bind(this);
		this.selectWeaponHandler = this.selectWeaponHandler.bind(this);
		console.log("entry", weaponsArray);
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
        			<h4>Choose your weapon!</h4>
					<CombatSkill selectCombatSkill={this.selectCombatSkill} />
					<br />
						 <WeaponList
								key={this.state.selectedCombatSkill}
								weaponsArray={weaponsArray}
								selectedCombatSkill={
									this.state.selectedCombatSkill
								}
								selectWeaponHandler={this.selectWeaponHandler}
							/>
					{this.state.selectedWeapon != undefined
						? <WeaponStats
								key={this.state.selectedWeapon}
								selectedWeapon={this.state.selectedWeapon}
								weaponsArray={weaponsArray}
							/>
						: ""}
				</div>
				<div className="character-panel">
					<h4>Choose Your Stats</h4>
				</div>
				<div className="output-panel" />
			</div>
		);
	}
}
render(<App />, document.getElementById("app"));
